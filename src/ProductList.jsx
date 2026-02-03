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
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b",
                    description: "Sweet fragrance that promotes relaxation.",
                    cost: "$18"
                }
            ]
        },
        {
            category: "Easy Care",
            plants: [
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/potted-plant-3816940_1280.jpg",
                    description: "Hardy vine that thrives in low light.",
                    cost: "$10"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283025_1280.jpg",
                    description: "Succulent with medicinal properties for skin.",
                    cost: "$14"
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
            <nav className="navbar" style={{backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>Paradise Nursery</h1>
                <div style={{display: 'flex', gap: '20px'}}>
                    <a href="/" style={{color: 'white', textDecoration: 'none'}}>Home</a>
                    <a href="#" style={{color: 'white', textDecoration: 'none'}}>Plants</a>
                    <a href="#" style={{color: 'white', textDecoration: 'none'}}>Cart (🛒)</a>
                </div>
            </nav>

            <div style={{padding: '20px'}}>
                {plantsArray.map((category, index) => (
                    <div key={index}>
                        <h2 style={{textAlign: 'center', margin: '30px 0'}}>{category.category}</h2>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px'}}>
                            {category.plants.map((plant, plantIndex) => (
                                <div className="plant-card" key={plantIndex} style={{border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '250px', textAlign: 'center'}}>
                                    <img src={plant.image} alt={plant.name} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                                    <h3>{plant.name}</h3>
                                    <p>{plant.description}</p>
                                    <p><strong>{plant.cost}</strong></p>
                                    <button 
                                        className="add-to-cart-button" 
                                        disabled={addedToCart[plant.name]}
                                        onClick={() => handleAddToCart(plant)}
                                        style={{backgroundColor: addedToCart[plant.name] ? '#ccc' : '#4CAF50', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px'}}>
                                        {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
