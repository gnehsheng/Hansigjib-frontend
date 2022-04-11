import { useEffect, useState } from "react";
import urlcat from "urlcat"
import { BACKEND } from "../utils/utils";
import axios from "axios"
// import '../style/menu.css'


export default function Menu() {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios.get(urlcat(BACKEND, "/menu"))
            .then((response) => {
                let arr = []
                response.data.map((el) => {
                    arr.push({
                        img: el.img,
                        name: el.name,
                        description: el.description,
                        price: el.price,
                        foodtype: el.foodtype
                    })
                })
                setMenu(arr)
            }).catch((error) => console.log(error))
    }, []);

    return (
        <>
        {menu.map((el) => (
        <article className="menu-item">
          <img src={el.img} alt={el.name} className="photo" />
          <div className="item-info">
            <header>
              <h4>{el.name}</h4>
              <h4 className="price">S${el.price}</h4>
            </header>
            <p className="item-text">{el.foodtype}</p>
          </div>
            
        </article>
        ))}
        </>  
    )

}