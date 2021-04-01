import React, { useLayoutEffect, useState, useEffect } from "react";
import Multiselectoption from "./Multiselectoption";
export default function Multiselect() {
  const [dropDownData, setDropdownData] = useState([]);
  const helperMultiSelect = [];
  // {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  // },
  // useEffect(() => {}, [dropDownData]);
  async function fetchData() {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos"
      );
      const data = await res.json();
      return data;
    } catch (err) {}
  }
  useEffect(() => {
    const res = async () => {
      try {
        const result = await fetchData();
        if (result) {
          console.log(result, "res");
          setDropdownData(result);
        }
      } catch (err) {}
    };
    // res();
  }, []);
  return (
    <>
      <Multiselectoption dropDownData={dropDownData} />
    </>
  );
}
