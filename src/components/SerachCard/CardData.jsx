import React, { useEffect, useState } from "react";
import { initialCards } from "./data";
import { useRef } from "react";

const CardData = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [cards] = useState(initialCards);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectedRef = useRef()

  const filteredCards = cards.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(inputSearch.toLowerCase())
  );

  

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const filterData = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };
  const uniqCategories = Array.from(
    new Set(initialCards.map((item) => item.category))
  );

  useEffect(()=>{
    selectedRef?.current?.select()
    selectedRef?.current?.setSelectionRange()
  },[])

  return (
    <div className="p-4">
      <input
        type="text"
        name="inputSearch"
        value={inputSearch}
        placeholder="Search"
        className="border rounded-md px-2 py-1"
        onChange={(e) => setInputSearch(e.target.value)}
      />

      <button
        id="dropdownDelayButton"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Developer
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div
          id="dropdownDelay"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDelayButton"
          >
            {uniqCategories.map((item, index) => (
              <li
                className="cursor-pointer"
                key={index}
                onClick={() => filterData(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div ref={selectedRef} className="container mx-auto flex gap-4 flex-wrap mt-5">
        {filteredCards
          .filter(
            (item) => !selectedCategory || item.category === selectedCategory
          )
          .map((item, index) => (
            <div key={index} className="my-4 bg-slate-300 p-6 w-80">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="text-gray-600">{item.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600">
                Click {item.title}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardData;
