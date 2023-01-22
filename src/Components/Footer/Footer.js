import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGithubSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="justify-self-center items-center grid-flow-col">
                <GiBrain className="text-4xl"></GiBrain>
                <p className="">Copyright © 2023 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-2 md:place-self-center justify-self-center">
                <Link><FaFacebookSquare className="text-3xl md:text-2xl"></FaFacebookSquare></Link>
                <Link><FaGithubSquare className="text-3xl md:text-2xl"></FaGithubSquare></Link>
                <Link><FaYoutubeSquare className="text-3xl md:text-2xl"></FaYoutubeSquare></Link>
            </div>
        </footer>
    );
};

export default Footer;
