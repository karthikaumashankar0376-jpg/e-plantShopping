import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; 

function ProductList() {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Aromatic",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1506173186414-9914a77273f0",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
           ...prevState,
           [plant.name]: true,
        }));
    };

    return (
        <div className="product-grid">
            <nav className="navbar">
                <h1>Paradise Nursery</h1>
                <div className="cart-icon">🛒</div>
            </nav>
            {plantsArray.map((category, index) => (
                <div key={index}>
                    <h2 className="category-title">{category.category}</h2>
                    <div className="plant-list">
                        {category.plants.map((plant, plantIndex) => (
                            <div className="plant-card" key={plantIndex}>
                                <img src={plant.image} alt={plant.name} />
                                <h3>{plant.name}</h3>
                                <p>{plant.description}</p>
                                <p><strong>{plant.cost}</strong></p>
                                <button 
                                    className="add-to-cart-button" 
                                    disabled={addedToCart[plant.name]}
                                    onClick={() => handleAddToCart(plant)}>
                                    {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
