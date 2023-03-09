import React from "react";
import '../styles/Header.css'

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className="header">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>RESUME</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}