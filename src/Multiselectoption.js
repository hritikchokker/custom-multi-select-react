import React, { useEffect, useState } from "react";
export default function Multiselectoption({ dropDownData, update }) {
  const [selectedItems, setSelectedItem] = useState([]);
  const helperDropDown = Array.from(dropDownData);
  const [inputEl, setInputEl] = useState("");
  useEffect(() => {}, []);
  const handleSelectChange = event => {
    const { name, value } = event.target;
    const { id } = value;
    console.log(value, "sjsjs");
    if (!selectedItems.find(el => el.id === id)) {
      const items = selectedItems;
      items.push(JSON.parse(value));
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
          !dropDownData.find(
            el => el.title.toLowerCase() === value.toLowerCase()
          )
        ) {
          const items = dropDownData;
          items.unshift({
            completed: false,
            id: Math.random(),
            title: value,
            userId: Math.random(),
            value
          });
          setInputEl("");
          update(items);
        } else {
          alert("item is already added in the list");
          setInputEl("");
        }
      }
      console.log("enter press here! ", inputEl, selectedItems);
    }
  };
  const filterDropDown = value => {
    if (!value) {
      setInputEl("");
    } else {
      setInputEl(value);
    }
    // console.log(inputEl, "input El");
    // if (!inputEl) {
    //   update(helperDropDown);
    //   return;
    // }
    // if (inputEl) {
    //   update(
    //     dropDownData.filter(el =>
    //       el.title.toLowerCase().includes(inputEl.toLowerCase())
    //     )
    //   );
    // }
    //  else {
    //   update(helperDropDown);
    // }
  };
  const submitHandler = () => {
    console.log(selectedItems, "selected items");
    alert(JSON.stringify(selectedItems));
  };

  return (
    <>
      <div>
        <input
          onKeyPress={handleKeyPress}
          onChange={event => filterDropDown(event.target.value)}
          type="text"
          value={inputEl}
        />
      </div>
      <label htmlFor="cars">Choose a car:</label>
      <select onChange={handleSelectChange} name="cars" multi="true" multiple>
        {dropDownData.map((element, index) => {
          return (
            <>
              <option key={index} value={JSON.stringify(element)}>
                {element.title}
              </option>
            </>
          );
        })}
        {dropDownData.length === 0 ? <>No data found</> : <></>}
      </select>
      <p> hold down ctrl(command for mac) key to select multiple item</p>
      <button onClick={submitHandler}>Submit</button>
    </>
  );
}

// <option value="volvo">Volvo</option>
// <option value="saab">Saab</option>
// <option value="mercedes">Mercedes</option>
// <option value="audi">Audi</option>
