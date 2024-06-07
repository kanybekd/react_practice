import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

import { input } from "./data";
import { useReducer } from "react";

export default function App() {
  return (
    <div>
      <Helper data={input} />
    </div>
  );
}

function Helper({ data }) {
  return (
    <ul>
      {data.map((item) => {
        if (item.type === "file") {
          return (
            <li>
              <FaFile />
              {item.name}
            </li>
          );
        } else {
          return (
            <li>
              <FaFolder />
              {item.name}

              <Helper data={item.contents} />
            </li>
          );
        }
      })}
    </ul>
  );
}

// five star
// hangman
// tiktaktoe
// recursive problem
// flip card
// shopping cart ,[searching, sorting,delete, add, increment, decrement]
// pagination,
// working with APIs, able to write with fetch, async await, axios
// optional survey app

// hooks, useEffect,usememo,useCallback, useRef,
// state management hooks
// contexAPI, useReducer
// router

// redux, context, reducer

// typescript [0-10] 3,4, unit test
