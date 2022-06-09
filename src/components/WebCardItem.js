import React from 'react';
import {Link} from 'react-router-dom';

function WebCardItem(props) {
    return (
        <>
            <li className="web__cards__item">
                <Link className="web__cards__item__link" to={props.path}>
                    <figure className="web__cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Web Images" className="web__cards__item__img"/>
                    </figure>
                    <div className="web__cards__item__info">
                        <h5 className="web__cards__item__text">{props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default WebCardItem
