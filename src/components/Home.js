import React, { useState, useEffect } from 'react';
import pic from "../mainpic.png";
import Menu from './menu';
import About from './About';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
    const [textAnimation, setTextAnimation] = useState(false);
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        // Trigger animation after a delay (for example, 1 second)
        const timer = setTimeout(() => {
            setTextAnimation(true);
        }, 1000);

        // Clear the timer on component unmount to avoid memory leaks
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (textAnimation) {
            const fullText = "I am a fullstack developer";
            let index = 0;
            const interval = setInterval(() => {
                setTypedText(fullText.substring(0, index));
                index++;
                if (index > fullText.length) {
                    clearInterval(interval);
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, [textAnimation]);

    const textStyle = {
        position: 'absolute',
        top: '60%',
        left: '10%', // Adjust this value to change the distance from the left edge
        transform: 'translateY(-50%)',
        color: 'black', // Example color
        fontSize: '44px', // Example font size
        fontFamily: 'Cursive', // Example font family
        textAlign: 'left',
    };

    return (
        <div>
            <Menu/>
               <div style={{ position: 'relative', width: '100%', height: '663px' }}>
            <img src={pic} style={{ width: '100%', height: '100%' }} />
            <div style={textStyle}>
                <div>SUMANTH</div>
                <div>{typedText}</div>
            </div>
        </div>
        <div id='About'>
        <About/>
        </div>
        <div id='Services'>
        <Services/>
            </div>
            <div id='Contact'>
            <Contact/>
            </div>
         </div>
     
    );
}

export default Home;
