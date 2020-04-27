import React from 'react';
import '../../css/default.css';
import HomeCard from '../cards/homeCard';

const Homes = [
    {
        name: 'Nice apartment in Zurich',
        rooms: '2 Bedrooms, 1 Kitchen, 1 Toilet',
        extras: 'No balcony available',
        surroundings: 'Lake Zurich reachable in 5',
        contact: 'tim.larry@gmx.ch',
        image: 'https://q-cf.bstatic.com/images/hotel/max1024x768/729/72965530.jpg',
    },
    {
        name: 'Nice apartment in Geneva',
        rooms: '3 Bedrooms, 1 Kitchen, 2 Toilets',
        extras: 'Balcony available',
        surroundings: 'Lake Geneva reachable in 5',
        contact: 'thomas.vogel@gmail.ch',
        image: 'https://pea-7f65.kxcdn.com/img/image_db/luxury_hotel_the_residence_living_area-942.jpg',
    },
    {
        name: 'Nice apartment in Bern',
        rooms: '1 Bedrooms, 1 Kitchen, 1 Toilets',
        extras: 'Balcony available',
        surroundings: 'Bundeshaus reachable in 10',
        contact: 'timon.tom@gmail.com',
        image: 'https://www.ums.ch/media/images/offers/2a/2ae1630368_offer_list.jpg',
    },
    {
        name: 'Nice villa in Paris',
        rooms: '5 Bedrooms, 2 Kitchen, 6 Toilets',
        extras: 'Balcony and Pool available',
        surroundings: 'Eiffeltower reachable in 15',
        contact: 'timophy.tupas@gmx.fr',
        image: 'https://palmerablue.com/data/img/img5dc188cf679d3f.jpg',
    }
];

const RenderHomes = () => {
    let homesList = [];
    for (let i = 0; i < Homes.length; i++) {
        homesList.push(
            <div>
                <HomeCard home={Homes[i]} />
                <br />
            </div>
        );
    }
    return homesList;
}

const Content = () => {
    return (
        <div className='contents ui container'>
            <span className='anchor' id='home'></span>
            <div className='rentalWelcomeSpace'>
                <p>homes</p>
            </div>
            {RenderHomes()}
        </div>
    );
}

export default Content;