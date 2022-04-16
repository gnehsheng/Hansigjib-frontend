import { useEffect, useState } from "react";
import urlcat from "urlcat"
import { BACKEND } from "../utils/utils";
import axios from "axios"
import '../style/menuItem.css'

export default function MenuItem() {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios.get(urlcat(BACKEND, "/menu"))
            .then((response) => {
                let arr = []
                response.data.forEach((el) => {
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
                <div className="app__menuitem">
                    <div className="app__menuitem-head">
                        <div className="app__menuitem-name">
                            <p className="p__cormorant" style={{ color: '#DCCA87' }}>{el.name}</p>
                        </div>

                        <div className="app__menuitem-img">
                            <img src={el.img} alt={el.name} />
                        </div>

                        <div className="app__menuitem-price">
                            <p className="p__cormorant">S${el.price}</p>
                        </div>

                        <div className="app__menuitem-description">
                            <p className="p__opensans" style={{ color: '#AAA' }}>{el.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}