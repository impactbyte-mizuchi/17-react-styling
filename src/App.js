import React from 'react';

import Button from './components/Button';
import Header from './components/Header';
import Card from './components/Card';
import CardMaterial from './components/CardMaterial';
import Carousel from './components/Carousel';
import Carousel2 from './components/Carousel2';

import './App.css';

function App() {
    return (
        <div className='App'>
            <Header primary />
            {/* <Carousel /> */}
            <Carousel2 />
            <h1>Hello World</h1>
            <Button color='red' />
            <Button color='yellow' />
            <Button background='pink' />
            <Button />
            <Card />

            <CardMaterial />
        </div>
    );
}

export default App;
