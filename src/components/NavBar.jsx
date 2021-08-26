import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouseUser} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <nav className='bg-gray-800'>
            <div className='flex text-center flex-col md:flex md:flex-row py-4'>
                <Link to={"/"} className='py-3 px-5 bg-purple-700 text-white transition-colors rounded-lg font-bold'>
                    <FontAwesomeIcon icon={faHouseUser} />
                </Link>
                <Link to={'/'} className='mx-5 text-white transition-colors hover:text-purple-700 border-b-2'>
                    Vêtements
                </Link>
                <Link to={"/"} className='mx-5 text-white transition-colors hover:text-purple-700'>
                   Bijoux
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
