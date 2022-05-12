import React from 'react'
import "./Header.css"
import { ImCreditCard } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

export default function Header() {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-logo'>
                    EXPENSE TRACKER  <ImCreditCard />
                </div>
                <div className='header-button'>
                    <a href="https://github.com/SumanVastrakar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    {/* //Essentially, adding rel="noopener noreferrer" to links protects your site's users against having the site you've linked to potentially hijacking the browser (via rogue JS). */}
                    
                </div>
            </div>

        </div>
    )
}
