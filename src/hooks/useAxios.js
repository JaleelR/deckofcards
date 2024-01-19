import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const UseAxios = ( url) => {
    const uuid = uuidv4();
    const [cards, setCards] = useState([]);

    const addCard = async (name = "") => {
        try {
            if (typeof name === "string") {
                 const response = await axios.get(url + name);
            console.log(url + name);
        setCards(cards => [...cards, { ...response.data, id: uuid }]);   
            } else {
                const response = await axios.get(url);
                console.log(url);
                setCards(cards => [...cards, { ...response.data, id: uuid }]); 
            }
              
        } catch (e) {
            console.log(e);
            console.log("object", name)
            console.log(url + name);
        }
  
    };
    return [cards, addCard];
} 