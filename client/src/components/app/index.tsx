import React, { useEffect } from 'react';
import Navigation from '../navigation';
import Api from '../../libs/apiServise';
import Image from '../../static/images/logo192.png';
import Counter from '../counter';


const App = (): JSX.Element => {
    useEffect(() => {
        Api
            .getPhotos()
            .then((data) => {
                console.log('data', data);
            })
            .catch((error) => {
                console.log('error', error);
            });
    });

    return (
        <div className="btg-app">
            <Navigation />
            <img
                alt="Image in HTML"
                src={Image}
            />
            <div className="background-image" />
            <Counter />
        </div>
    );
};

export default App;