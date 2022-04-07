import { useEffect, useState } from "react";
import urlcat from "urlcat"
import { BACKEND } from "../utils/utils";
import axios from "axios"


export default function MenuPage() {
 const [menu, setMenu] = useState([]);
    const menuName = [];
  useEffect(() => {
      console.log(BACKEND)
     axios.get(urlcat(BACKEND, "/menu"))
     .then((response) => {
         console.log(response.data[0])
         response.data.forEach((el) => {

            menuName.push(el.name)
         })
         setMenu(menuName)

        })
      .catch ((error) => console.log(error))
  }, []);

    return (
        <>
        <h2>Menu</h2>
       <ul>
        {menu.map((el) => (

           <li>{el}
          </li>
        ))}
      </ul>
        
        </>
    )
}