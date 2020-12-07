import React from 'react';
import "./Customer.css";

function Customer() {
    return (
        <div>
            <div className="customer-container">
                Customers
            </div>
            <div >
                <button className="add-button">
                <span style={{fontSize: '20px'}}>+</span>&nbsp;&nbsp;Add New</button>
                
            </div>
        </div>
    )
}

export default Customer
