import React from "react";
import "./Perfect.css";
import logo from "./image.jpg"

export const Perfect = () => {
    return (
        <div className="Perfect-main">
            <div className="Perfect-content">
                <div className="Perfect-title">Choose the Perfect <br /> Light for Your Space</div>
                <div className="Perfect-matter">Explore Our Best-selling LED Solutions</div>
                <div className="Perfect-title1">LED Panel Lights</div>
                <div className="Perfect-matter1">  Sleek, stylish, and perfect for modern interiors</div>
                <div>
                    <img className="Perfect-image" src= {logo} alt="nothing" />
                </div>
            </div>
        </div>
    )
}