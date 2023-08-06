import { useEffect, useState } from "react";
import PlanBox from "./PlanBox";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineComputer, MdSmartphone, MdOutlineTablet } from "react-icons/md";
import {db} from "../utils/firebase";
import {doc, getDocs, collection, addDoc, onSnapshot } from 'firebase/firestore';
import { selectUser } from "../store/slices/userSlice";
import { useSelector } from "react-redux";
import {loadStripe} from "@stripe/stripe-js"

const PricingTable = () => {
  const user = useSelector(selectUser)
  const [isYearly, setIsYearly] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
const [products, setProducts] = useState([]);
const priceIds = [];
const loginRoute = '/signin';
const planRoute = '/signup/planform'


  const fetchProductsAndPrices = async () => {
    const productsQuerySnapshot = await getDocs(collection(db, 'products'));
    const productsData = [];

    for (const productDoc of productsQuerySnapshot.docs) {
      const product = productDoc.data();
      const productWithId = { ...product, id: productDoc.id };

      const pricesQuerySnapshot = await getDocs(collection(productDoc.ref, 'prices'));
      const pricesData = pricesQuerySnapshot.docs.map((priceDoc) => {
        const price = priceDoc.data();
        priceIds.push(priceDoc.id)
        return { priceId: priceDoc.id, ...price };
      });

      productWithId.prices = pricesData;

      productsData.push(productWithId);
    }

    console.log(priceIds)

    setProducts(productsData);
  };

  useEffect(() => {
    fetchProductsAndPrices();
  }, []);


  console.log(products)

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const getPriceId=()=>{

    
   if(selectedOption=="option1")
   {
     if(isYearly==true)
     {
      return priceIds[0]
     }else{
      return priceIds[1]
     }
   }else if(selectedOption=="option2")
   {
     if(isYearly==true)
     {
      return priceIds[3]
     }else{
      return priceIds[2]
     }
   }else if(selectedOption=="option3")
   {
     if(isYearly==true)
     {
      return priceIds[5]
     }else{
      return priceIds[4]
     }
   }else if(selectedOption=="option4")
   {
     if(isYearly==true)
     {
      return priceIds[7]
     }else{
      return priceIds[6]
     }
  }
}


   const handleCheckout=async (e)=>{

    e.preventDefault()

    const success_url = window.location.origin + loginRoute
    const cancel_url  = window.location.origin + planRoute

    await fetchProductsAndPrices()

    const priceId = await getPriceId()

    if (!priceId) {
      console.error("Invalid priceId:", priceId);
      return;
    }

    try {
      console.log("hi")
      const checkoutSessionRef = await addDoc(
        collection(doc(db, "customers", user.uid), "checkout_sessions"),
        {
          price: priceId,
          success_url: success_url,
          cancel_url: cancel_url,
        }
      );


      onSnapshot(checkoutSessionRef, async (snap) => {
        const { error, sessionId } = snap.data();
        if (error) {
          alert(`An error occurred: ${error.message}`);
        }

        if (sessionId) {
        
          const stripe = await loadStripe(
            "pk_test_51MVdxzSFMTj4nqebwkFGQwI33Qr9yAdpBqB9GdeYIiOKJnsaMy4mftmSgThnBZiI1G91Trg7TP3Pcj7nh3Vj9u830080OJ3x1k" 
          );

          stripe.redirectToCheckout({ sessionId });
        }
      });
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }


  };
      


   


  return (
    <>
      <div className="relative overflow-x-auto ">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs ">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="flex justify-center items-center bg-[#004E96] rounded-full p-2 w-[12vw]">
                  <span
                    className={`cursor-pointer inline-flex items-center p-3 rounded-full justify-center  w-[5vw] transition-all ease-in ${
                      isYearly
                        ? "bg-white text-[#004E96] font-bold"
                        : "bg-[#004E96]  text-white"
                    }`}
                    onClick={() => handleToggle()}
                  >
                    Monthly
                  </span>
                  <span
                    className={`cursor-pointer ml-2 inline-flex items-center p-3 w-[5vw] rounded-full justify-center  transition-all ease-in ${
                      isYearly
                        ? "bg-[#004E96]  text-white"
                        : "bg-white text-#004E96 font-bold"
                    }`}
                    onClick={() => handleToggle()}
                  >
                    Yearly
                  </span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <label className="cursor-pointer inline-flex items-center">
                  <input
                    type="radio"
                    className="opacity-0"
                    checked={selectedOption === "option1"}
                    onChange={() => handleOptionChange("option1")}
                  />
                  <PlanBox
                    title="Mobile"
                    selected={selectedOption === "option1"}
                    onClick={() => handleOptionChange("option1")}
                  />
                </label>
              </th>

              <th scope="col" className="px-6 py-3 ">
                <label className="cursor-pointer inline-flex items-center">
                  <input
                    type="radio"
                    className="opacity-0"
                    checked={selectedOption === "option2"}
                    onChange={() => handleOptionChange("option2")}
                  />
                  <PlanBox
                    title="Basic"
                    selected={selectedOption === "option2"}
                    onClick={() => handleOptionChange("option2")}
                  />
                </label>
              </th>

              <th scope="col" className="px-6 py-3 ">
                <label className="cursor-pointer inline-flex items-center">
                  <input
                    type="radio"
                    className="opacity-0"
                    checked={selectedOption === "option3"}
                    onChange={() => handleOptionChange("option3")}
                  />
                  <PlanBox
                    title="Standard"
                    selected={selectedOption === "option3"}
                    onClick={() => handleOptionChange("option3")}
                  />
                </label>
              </th>

              <th scope="col" className="px-6 py-3 ">
                <label className="cursor-pointer inline-flex items-center">
                  <input
                    type="radio"
                    className="opacity-0"
                    checked={selectedOption === "option4"}
                    onChange={() => handleOptionChange("option4")}
                  />
                  <PlanBox
                    title="Premium"
                    selected={selectedOption === "option4"}
                    onClick={() => handleOptionChange("option4")}
                  />
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
          
            <tr
              className={`border-b border-gray-300 text-base text-center font-bold`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap  text-left"
              >
                Monthly Price
              </th>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option1" ? "text-[#004E96]" : "text-white"
                }`}
              >
                &#8377; {isYearly ? 100 : 1000}
              </td>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option2" ? "text-[#004E96]" : "text-white"
                }`}
              >
                &#8377; {isYearly ? 200 : 2000}
              </td>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option3" ? "text-[#004E96]" : "text-white"
                }`}
              >
                &#8377; {isYearly ? 500 : 5000}
              </td>

              <td
                className={`px-6 py-4 ${
                  selectedOption === "option4" ? "text-[#004E96]" : "text-white"
                }`}
              >
                &#8377; {isYearly ? 700 : 7000}
              </td>
            </tr>
            <tr
              className={`border-b border-gray-300 text-base text-center font-bold`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap text-left text-white"
              >
                Video Quality
              </th>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option1" ? "text-[#004E96]" : "text-white"
                }`}
              >
                Good
              </td>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option2" ? "text-[#004E96]" : "text-white"
                }`}
              >
                Good
              </td>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option3" ? "text-[#004E96]" : "text-white"
                }`}
              >
                Better
              </td>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option4" ? "text-[#004E96]" : "text-white"
                }`}
              >
                Best
              </td>
            </tr>
            <tr
              className={`border-b border-gray-300 text-base text-center font-bold `}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap text-white text-left"
              >
                Resolution
              </th>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option1" ? "text-[#004E96]" : "text-white"
                }`}
              >
                480p
              </td>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option2" ? "text-[#004E96]" : "text-white"
                }`}
              >
                480p
              </td>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option3" ? "text-[#004E96]" : "text-white"
                }`}
              >
                1080p
              </td>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option4" ? "text-[#004E96]" : "text-white"
                }`}
              >
                4k+HDR
              </td>
            </tr>
            <tr className={` text-base text-center font-bold`}>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-left text-white relative bottom-[18vh]"
              >
                Devices you can use to watch
              </th>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option1" ? "text-[#004E96]" : "text-white "
                }`}
              >
                <ul
                  className="flex flex-col items-center
                       justify-start gap-6 relative bottom-[10vh]"
                >
                  <li
                    className="flex flex-col items-center
                       justify-start gap-4"
                  >
                    <p>Phone</p>
                    <MdSmartphone className="text-xl" />
                  </li>
                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Tablet</p>
                    <MdOutlineTablet className="text-xl" />
                  </li>
                </ul>
              </td>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option2" ? "text-[#004E96]" : "text-white"
                }`}
              >
                <ul
                  className="flex flex-col items-center
                       justify-center gap-6"
                >
                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Phone</p>
                    <MdSmartphone className="text-xl" />
                  </li>
                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Tablet</p>
                    <MdOutlineTablet className="text-xl" />
                  </li>
                  <li
                    className="flex flex-col items-center
                       justify-center  gap-4"
                  >
                    <p>Computer</p>
                    <MdOutlineComputer className="text-xl" />
                  </li>

                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Tv</p>
                    <RiComputerLine className="text-xl" />
                  </li>
                </ul>
              </td>
              <td
                className={`px-6 py-4 ${
                  selectedOption === "option3" ? "text-[#004E96]" : "text-white"
                }`}
              >
                <ul
                  className="flex flex-col items-center
                       justify-center gap-6"
                >
                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Phone</p>
                    <MdSmartphone className="text-xl" />
                  </li>
                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Tablet</p>
                    <MdOutlineTablet className="text-xl" />
                  </li>
                  <li
                    className="flex flex-col items-center
                       justify-center  gap-4"
                  >
                    <p>Computer</p>
                    <MdOutlineComputer className="text-xl" />
                  </li>

                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Tv</p>
                    <RiComputerLine className="text-xl" />
                  </li>
                </ul>
              </td>

              <td
                className={`px-6 py-4 ${
                  selectedOption === "option4" ? "text-[#004E96]" : "text-white"
                }`}
              >
                <ul
                  className="flex flex-col items-center
                       justify-center gap-6"
                >
                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Phone</p>
                    <MdSmartphone className="text-xl" />
                  </li>
                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Tablet</p>
                    <MdOutlineTablet className="text-xl" />
                  </li>
                  <li
                    className="flex flex-col items-center
                       justify-center  gap-4"
                  >
                    <p>Computer</p>
                    <MdOutlineComputer className="text-xl" />
                  </li>
                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Tv</p>
                    <RiComputerLine className="text-xl" />
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
         
        </table>

        <div className='w-full text-center p-20'>
          {/* <Link to="/signup/registration"> */}
            <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-4 px-6 w-[40%] text-xl" onClick={(e)=>handleCheckout(e)}>
              Proceed to Checkout
            </button>
          {/* </Link> */}
        </div>
      </div>

    
    </>
  );
};


export default PricingTable;
