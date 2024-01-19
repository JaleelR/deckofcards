
import React, { useState, useEffect } from "react";

export const UseFlip = () => {
    const [flip, flipCard] = useState(true);
     const fliped = () => {
        flipCard(isUp => !isUp);
    };
    return [flip, fliped];
}