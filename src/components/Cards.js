import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Browse through some of our Solutions!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/web-graphic.jpg"
                        text="Grow Your Business with a Responsive, Modern, and
                        Manageable Website"
                        label="Web Dev Services"
                        path='web-services'
                         />
                        <CardItem
                        src="images/internet.jpg"
                        text="Execute through Innovation and Stand Out in the Cloud"
                        label="Web Services"
                        path='web-services'
                         />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/social-media.png"
                        text="We Offer Original and Creative Marketing Strategies"
                        label="Marketing"
                        path='digital-services'
                         />
                        <CardItem
                        src="images/seo.jpg"
                        text="SEO is Fun and Easy Once you Know How"
                        label="SEO"
                        path='web-services'
                         />
                        <CardItem
                        src="images/database.png"
                        text="We Tidy your Digital Media! 
                        Archive Everything and Lower Digital Waste"
                        label="Archiving Services"
                        path='digital-services'
                         />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
