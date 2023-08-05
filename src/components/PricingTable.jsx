import { useState } from "react";
import PlanBox from "./PlanBox";
import { BsPhone, BsTabletLandscape } from "react-icons/Bs";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineComputer } from "react-icons/md";

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
      <div class="relative overflow-x-auto ">
        <table class="w-full text-sm text-left ">
          <thead class="text-xs ">
            <tr>
              <th scope="col" class="px-6 py-3">
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
              <th scope="col" class="px-6 py-3 ">
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

              <th scope="col" class="px-6 py-3 ">
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

              <th scope="col" class="px-6 py-3 ">
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

              <th scope="col" class="px-6 py-3 ">
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
              class={`border-b border-gray-300 text-base text-center font-bold`}
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-white whitespace-nowrap  text-left"
              >
                Monthly Price
              </th>
              <td
                class={`px-6 py-4 ${
                  selectedOption === "option1" ? "text-[#004E96]" : "text-white"
                }`}
              >
                &#8377; {isYearly ? 100 : 1000}
              </td>
              <td
                class={`px-6 py-4 ${
                  selectedOption === "option2" ? "text-[#004E96]" : "text-white"
                }`}
              >
                &#8377; {isYearly ? 200 : 2000}
              </td>
              <td
                class={`px-6 py-4 ${
                  selectedOption === "option3" ? "text-[#004E96]" : "text-white"
                }`}
              >
                &#8377; {isYearly ? 500 : 5000}
              </td>

              <td
                class={`px-6 py-4 ${
                  selectedOption === "option4" ? "text-[#004E96]" : "text-white"
                }`}
              >
                &#8377; {isYearly ? 700 : 7000}
              </td>
            </tr>
            <tr
              class={`border-b border-gray-300 text-base text-center font-bold`}
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium  whitespace-nowrap text-left text-white"
              >
                Video Quality
              </th>
              <td
                class={`px-6 py-4 ${
                  selectedOption === "option1" ? "text-[#004E96]" : "text-white"
                }`}
              >
                Good
              </td>
              <td
                class={`px-6 py-4 ${
                  selectedOption === "option2" ? "text-[#004E96]" : "text-white"
                }`}
              >
                Good
              </td>
              <td
                class={`px-6 py-4 ${
                  selectedOption === "option3" ? "text-[#004E96]" : "text-white"
                }`}
              >
                Better
              </td>
              <td
                class={`px-6 py-4 ${
                  selectedOption === "option4" ? "text-[#004E96]" : "text-white"
                }`}
              >
                Best
              </td>
            </tr>
            <tr
              class={`border-b border-gray-300 text-base text-center font-bold `}
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium  whitespace-nowrap text-white text-left"
              >
                Resolution
              </th>
              <td
                class={`px-6 py-4 ${
                  selectedOption === "option1" ? "text-[#004E96]" : "text-white"
                }`}
              >
                480p
              </td>
              <td
                class={`px-6 py-4 ${
                  selectedOption === "option2" ? "text-[#004E96]" : "text-white"
                }`}
              >
                480p
              </td>
              <td
                class={`px-6 py-4 ${
                  selectedOption === "option3" ? "text-[#004E96]" : "text-white"
                }`}
              >
                1080p
              </td>
              <td
                class={`px-6 py-4 ${
                  selectedOption === "option4" ? "text-[#004E96]" : "text-white"
                }`}
              >
                4k+HDR
              </td>
            </tr>
            <tr class={` text-base text-center font-bold`}>
              <th
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap text-left text-white relative bottom-[18vh]"
              >
                Devices you can use to watch
              </th>
              <td
                class={`px-6 py-4 ${
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
                    <BsPhone className="text-xl" />
                  </li>
                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Tablet</p>
                    <BsTabletLandscape className="text-xl" />
                  </li>
                </ul>
              </td>
              <td
                class={`px-6 py-4 ${
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
                    <BsPhone className="text-xl" />
                  </li>
                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Tablet</p>
                    <BsTabletLandscape className="text-xl" />
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
                class={`px-6 py-4 ${
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
                    <BsPhone className="text-xl" />
                  </li>
                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Tablet</p>
                    <BsTabletLandscape className="text-xl" />
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
                class={`px-6 py-4 ${
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
                    <BsPhone className="text-xl" />
                  </li>
                  <li
                    className="flex flex-col items-center
                       justify-center gap-4"
                  >
                    <p>Tablet</p>
                    <BsTabletLandscape className="text-xl" />
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
      </div>
    </>
  );
};

export default PricingTable;
