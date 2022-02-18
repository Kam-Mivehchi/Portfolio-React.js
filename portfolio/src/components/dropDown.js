import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const DropDown = () => {
    const menuToggle = (e) => {

        document.getElementById("myDropdown").classList.remove("hidden");

    }
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdown = document.getElementById("myDropdown");


            if (!dropdown.classList.contains('hidden')) {
                dropdown.classList.add('hidden');

            }
        }
    }

    return (
        <div className="relative inline-block text-left">
            <div>
                <button type="button" onClick={menuToggle} className=" dropbtn inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <GiHamburgerMenu />
                </button>
            </div>
            <div id="myDropdown" className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">

                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                    <form method="POST" action="#" role="none">
                        <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DropDown