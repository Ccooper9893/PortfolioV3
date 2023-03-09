import React from "react";

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className="header">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>RESUME</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}