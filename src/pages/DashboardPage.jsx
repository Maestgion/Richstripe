import React, { useState, useEffect } from 'react';
import { auth, db } from '../utils/firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { signout } from '../store/slices/userSlice';
import { loadStripe } from '@stripe/stripe-js';

const DashboardPage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [subscription, setSubscription] = useState([]);

  const getSubscriptionList = async () => {
    try {
      if (!user || !user.uid) {
        return [];
      }

      const customerRef = doc(db, 'customers', user.uid);
      const subscriptionRef = collection(customerRef, 'subscriptions');

      const data = await getDocs(subscriptionRef);
      const filteredData = data.docs.map((doc) => {
        const { current_period_start, current_period_end, status, stripeSubscriptionId, ...rest } = doc.data();
        return {
          current_period_start: current_period_start?.toDate(),
          current_period_end: current_period_end?.toDate(),
          status,
          stripeSubscriptionId,
          id: doc.id,
          ...rest,
        };
      });

      return filteredData;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  useEffect(() => {
    const fetchSubscription = async () => {
      const subscriptionData = await getSubscriptionList();
      setSubscription(subscriptionData);
    };

    fetchSubscription();
  }, [user]);

  const handleCancel = async (subscriptionId) => {
    try {
      const subscriptionToCancel = subscription.find((sub) => sub.id === subscriptionId);

      if (!subscriptionToCancel) {
        console.error('Subscription not found.');
        return;
      }

      const stripe = await loadStripe(  "pk_test_51MVdxzSFMTj4nqebwkFGQwI33Qr9yAdpBqB9GdeYIiOKJnsaMy4mftmSgThnBZiI1G91Trg7TP3Pcj7nh3Vj9u830080OJ3x1k" );
      const { error } = await stripe.cancelSubscription(subscriptionToCancel.stripeSubscriptionId);

      if (error) {
        console.error('Error canceling subscription:', error.message);
        return;
      }

      await deleteDoc(doc(db, 'customers', user.uid, 'subscriptions', subscriptionId));
      const updatedSubscription = subscription.filter((sub) => sub.id !== subscriptionId);
      setSubscription(updatedSubscription);

      dispatch(signout());
      console.log('Subscription canceled successfully!');
    } catch (error) {
      console.error('Error canceling subscription:', error);
    }
  };

  return (
    <div className='h-[90vh] flex flex-col py-10 items-center gap-10 bg-[#0F1014]'>
      <div>
        <p className='text-white text-4xl font-bold'>Subscriptions</p>
      </div>

      {subscription.map((sub) => (
        <div
          key={sub.id}
          className='w-[50%] p-4 text-white text-lg flex justify-between items-center bg-[#004E96] rounded-lg'
        >
          <div>
            <p>Status: {sub.status}</p>
            <p>Start Date: {sub.current_period_start?.toString()}</p>
            <p>End Date: {sub.current_period_end?.toString()}</p>
          </div>
          <button
            className="outline-none rounded-md bg-[#035fb5] text-white hover:bg-[#004E96] py-2 px-4 text-base"
            onClick={() => handleCancel(sub.id)}
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
