import { useEffect, useState } from "react";
import urlcat from "urlcat"
import { BACKEND } from "../utils/utils";


export default function MenuPage() {
     const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(urlcat(BACKEND, "/menu"))
      .then((response) => response.json())
      .then((data) => setMenu(data));
  }, []);

    return (
        <>
        <h2>Menu</h2>
         {menu.map((menus) => (
           <li key={menus.name}>
          </li>
        ))}
        </>
    )
}