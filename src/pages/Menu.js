import { useEffect, useState } from "react";
import urlcat from "urlcat"
import { BACKEND } from "../utils/utils";
import axios from "axios"

export default function MenuPage() {
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
                        <h2>{el.name}</h2>
                        <img src={el.img} alt={el.name} className="photo" />
                        <p>{el.description}</p>
                        <p>S${el.price}</p>
                        <button>Add to cart</button>
                </article>
            ))}
        </>
    )
}