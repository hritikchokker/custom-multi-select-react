import React, { useEffect, useState } from "react";
export default function Multiselectoption({ dropDownData }) {
  const [selectedItems, setSelectedItem] = useState([]);
  const [inputEl, setInputEl] = useState("");
  const handleSelectChange = event => {
    const { value, name } = event.target;
    if (!selectedItems.find(el => el.toLowerCase() === value.toLowerCase())) {
      const items = selectedItems;
      items.push(value);
      // items.unshift(value);
      setSelectedItem(items);
    }
    // if(selected){

    // }
  };
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      const { value } = event.target;
      if (value && value.length) {
        if (
          !selectedItems.find(el => el.toLowerCase() === value.toLowerCase())
        ) {
          const items = selectedItems;
          items.unshift(value);
          setSelectedItem(items);
        } else {
          alert("item is already added in the list");
        }
        setInputEl("");
      }
      console.log("enter press here! ", inputEl, selectedItems);
    }
  };

  return (
    <>
      <div>
        <input
          onKeyPress={handleKeyPress}
          onChange={event => setInputEl(event.target.value)}
          type="text"
        />
      </div>
      <label htmlFor="cars">Choose a car:</label>
      <select onChange={handleSelectChange} name="cars" multi="true" multiple>
        {dropDownData.forEach(element => {
          console.log(element, "sss");
          return <option value={element.id}>{element.title}</option>;
        })}
        // <option value="volvo">Volvo</option>
        // <option value="saab">Saab</option>
        // <option value="mercedes">Mercedes</option>
        // <option value="audi">Audi</option>
      </select>
      <p> hold down ctrl(command for mac) key to select multiple item</p>
    </>
  );
}
