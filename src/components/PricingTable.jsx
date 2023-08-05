import { useState } from "react"; 
import PlanBox from "./PlanBox";
import {BiRupee} from "react-icons/bi"


const PricingTable = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleToggle = () => {
        setIsYearly(!isYearly);
      };

  

      const handleOptionChange = (option) => {
        setSelectedOption(option);
      };
  return (
    <>
        
<div class="relative overflow-x-auto shadow-md  ">
    <table class="w-full text-sm text-left ">

        <thead class="text-xs ">
            <tr>
                <th scope="col" class="px-6 py-3">
                <div className="flex justify-center items-center bg-[#004E96] rounded-full p-2 w-[12vw]">
      <span
        className={`cursor-pointer inline-flex items-center p-3 rounded-full justify-center  w-[5vw] transition-all ease-in ${
          isYearly ? 'bg-white text-[#004E96] font-bold' : 'bg-[#004E96]  text-white'
        }`}
        onClick={() => handleToggle()}
      >
        Monthly
      </span>
      <span
        className={`cursor-pointer ml-2 inline-flex items-center p-3 w-[5vw] rounded-full justify-center  transition-all ease-in ${
          isYearly ? 'bg-[#004E96]  text-white' : 'bg-white text-#004E96 font-bold'
        }`}
        onClick={() => handleToggle()}
      >
        Yearly
      </span>
    </div>
</th>
                <th scope="col" class="px-6 py-3 ">
                <label className="cursor-pointer inline-flex items-center">
          <input
            type="radio"
            className="opacity-0"
            checked={selectedOption === 'option1'}
            onChange={() => handleOptionChange('option1')}
          />
          <PlanBox
            title="Mobile"
            selected={selectedOption === 'option1'}
            onClick={() => handleOptionChange('option1')}
          />
        </label>
                </th>
             
        
             
                <th scope="col" class="px-6 py-3 ">
                <label className="cursor-pointer inline-flex items-center">
          <input
            type="radio"
            className="opacity-0"
            checked={selectedOption === 'option2'}
            onChange={() => handleOptionChange('option2')}
          />
          <PlanBox
            title="Basic"
            selected={selectedOption === 'option2'}
            onClick={() => handleOptionChange('option2')}
          />
        </label>
                </th>
             
                <th scope="col" class="px-6 py-3 ">
                <label className="cursor-pointer inline-flex items-center">
          <input
            type="radio"
            className="opacity-0"
            checked={selectedOption === 'option3'}
            onChange={() => handleOptionChange('option3')}
          />
          <PlanBox
            title="Standard"
            selected={selectedOption === 'option3'}
            onClick={() => handleOptionChange('option3')}
          />
        </label>
                </th>
             
             
                <th scope="col" class="px-6 py-3 ">
                <label className="cursor-pointer inline-flex items-center">
          <input
            type="radio"
            className="opacity-0"
            checked={selectedOption === 'option4'}
            onChange={() => handleOptionChange('option4')}
          />
          <PlanBox
            title="Premium"
            selected={selectedOption === 'option4'}
            onClick={() => handleOptionChange('option4')}
          />
        </label>
                </th>
             

                
               
            </tr>
        </thead>
        <tbody>
            <tr class={`border-b border-gray-300 text-base text-center `}>
                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap  text-left">
                    Monthly Price
                </th>
                <td class={`px-6 py-4 ${selectedOption==='option1'? 'text-[#004E96]': 'text-white'}`}>
                &#8377; 100
                </td>
                <td class="px-6 py-4">
                &#8377; 200
                </td>
                <td class="px-6 py-4">
                &#8377; 500
                </td>
            
                <td class="px-6 py-4">
                &#8377; 700
                </td>
            
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Video Quality
                </th>
                <td class={`px-6 py-4 ${selectedOption==='option1'? 'text-[#004E96]': 'text-white'}`}>
                    Good
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Resolution
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                &#x20B9;99
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Devices you can use to watch
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </>
  )
}

export default PricingTable