import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dume = () => {
    const [state, setState] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products");
            setState(response.data.products); // Ensure to access the correct property
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []); // Adding an empty dependency array to run once on mount

    return (
        <div id="dumy">
            {state.map((m) => (
                <div key={m.id}> {/* Provide a unique key for each item */}
                    <h1>{m.title}</h1>
                    <h3>{m.category}</h3>
                    <h2>{m.price}</h2>
                </div>
            ))}
        </div>
    );
};

export default Dume;
