import React from "react";
import "../App.css";
import {Link, useNavigate} from "react-router-dom";


export default function LandingPage() {
    const router = useNavigate();
    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader"><h2>Hola Hub</h2></div>
                <div className="navList">
                    <p onClick={() => {
                        router("/zxcv")
                    }}>Join as guest</p>
                    <p onClick={() => {
                        router("/auth")
                    }}>Register</p>
                    <div role="button" onClick={() => {
                        router("/auth")
                    }}>
                        Login
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color: "#FF9839"}}>Connect</span> with your loved Ones</h1>

                    <p>Cover a distance by 'Hola Hub'</p>
                    <div role="button">
                        <Link to="/auth">Get Started</Link>
                    </div>
                </div>
                <div>

                     <img src="/mobile.png"/>

                </div>
            </div>

        </div>
    );
}