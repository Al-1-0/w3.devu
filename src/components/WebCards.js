import React from 'react';
import WebCardItem from './WebCardItem';
import './WebCards.css';

function WebCards() {
    return (
        <div className='web__cards'>
            <h1>Read about our bespoke web development services.</h1>
            <div className="web__cards__container">
                <div className="web__cards__wrapper">
                    <ul className="web__cards__items">
                        <WebCardItem
                        src="images/wordpress.jpg"
                        text="Looking for a new or improved WordPress or Shopify Site? "
                        label="WordPress"
                        path='web-services'
                         />
                        <WebCardItem
                        src="images/responsive.png"
                        text="Mobile first! Make sure your website is responsive!"
                        label="Responsive Design"
                        path='web-services'
                         />
                          <WebCardItem
                        src="images/seo.jpg"
                        text="We apply best practice methods in SEO"
                        label="SEO"
                        path='web-services'
                         />                        
                    </ul>
                    {/*<ul className="cards__items">
                        <WebCardItem
                        src="images/social-media.png"
                        text="We Offer Original and Creative Marketing Strategies"
                        label="Marketing"
                        path='digital-services'
                         />
                       
                        <WebCardItem
                        src="images/database.png"
                        text="We Tidy your Digital Media! 
                        Archive Everything and Lower Digital Waste"
                        label="Archiving Services"
                        path='digital-services'
                         />
                    </ul>*/}
                </div>
            </div>
        </div>
    )
}

export default WebCards;
