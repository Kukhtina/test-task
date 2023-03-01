import React from "react";
import './itemModal.css';

const ItemModal = ({setItemToShow, item}) => {

    const closeItemModal = () => {
        setItemToShow();
    }

    return (
        <div className="itemModal-container">
            <div className="itemModal-content" key={item.id}>
                <h2>{item.title}</h2>
                <span className="itemModal-description">Description:</span>
                <span className="itemModal-description-content">{item.description}</span>
                <span>Status: <input type="checkbox" disabled defaultChecked={item.checked} /></span>
                <button className="itemModal-button" type="button" onClick={closeItemModal}>close</button>
            </div>
        </div>
    )
}

export default ItemModal;
