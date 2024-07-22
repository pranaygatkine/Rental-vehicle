import React from 'react';
import './Styles.css';

export default class About extends React.Component{
    render(){
        return(
            <div className = "conatiner">
                <div className="about">
                   <h1 className="py-3 font-style">About us</h1>
                </div>
                <div className="article">
                    <article>
                    Introducing our new bike ride app, designed to enhance your cycling experience! Whether you're a casual rider or a seasoned cyclist, our app offers a range of features to make every ride enjoyable and efficient. Track your routes with real-time GPS, monitor your speed, distance, and elevation, and set personal goals to challenge yourself. Stay motivated with a built-in social community where you can share your achievements and compete with friends. Safety is paramount, so our app includes emergency contact alerts and weather updates to keep you informed. Download now and pedal towards a healthier, more connected cycling journey!                    <br/>
                    <br/>
                    <h2 className="text-center font-style">Really Who are you guys.....</h2>
                    Discover the ultimate cycling companion with our innovative bike ride app, crafted to make your rides more enjoyable and efficient. Packed with attractive features, our app lets you track your routes in real-time with GPS, monitor speed, distance, and elevation, and set personal milestones to push your limits. Join a vibrant social community to share achievements, compete with friends, and stay inspired. Prioritizing your safety, the app includes emergency alerts and live weather updates. Download our bike ride app today and transform every ride into an exciting adventure, connecting you with a world of cycling enthusiasts!
                    </article>
                </div>
                <div className="about">
                   <h1 className="py-3 font-style">Let's get goin'. Shall we?</h1>
                </div>
            </div>
        )
    }
}