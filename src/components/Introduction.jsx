import React from "react";
import '../assets/styles/Introduction.css';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="holder">
            <div className="intro-container">
                {/* Group 1: Title, Name, and Text Content */}
                <div className="intro-group-1">
                    <div className="main-title">
                        <TypeAnimation
                            sequence={[
                                'Xin chào', 1000,
                                'Hello', 1000,
                                'Hallo', 1000,
                                '你好', 1000,
                                'こんにちは', 1000,
                                'Bonjour', 1000,
                                'Aloha', 1000,
                                'Ciao', 1000,
                                '안녕하세요', 1000,
                                'Namaste', 1000,
                                'Ola', 1000,
                                'Guten Tag', 1000,
                                'Zdravstvuyte', 1000,
                                'Hola', 1000,
                                'Salve', 1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '50px', display: 'inline-block', color: 'white' }}
                            repeat={Infinity}
                        />
                    </div>
                    <h2 className="title-hello">Greetings, I am</h2>
                    <h2 className="title-name">TRINH VAN THUONG</h2>
                    <span className="title-role"> - Backend Developer -</span>
                    <p className="content">
                        "A dynamic and passionate software developer who embarked on a transformative journey into the world of technology."
                    </p>
                </div>

                {/* Group 2: Profile Picture */}
                <div className="intro-group-2">
                    <div className="circle-frame">
                        <img
                            className="profile-picture"
                            src=".\images\profile.jpg"
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
