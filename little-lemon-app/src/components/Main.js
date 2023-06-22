import React from 'react' ;
import Bruschetta from '../images/Bruschetta.jpg';
import GreekSalad from '../images/GreekSalad.jpg';
import LemonPie from '../images/LemonPie.jpg';
import Card from './Card';

const specialsData = [
    {
        img: Bruschetta,
        title: "Bruschetta",
        price: 8.50,
        description: 'a slice of grilled bread, rubbed with garlic and topped with extra-virgin olive oil, tomatoes and salt'
    },
    {
        img: GreekSalad,
        title: "Greek Salad",
        price: 9.50,
        description: 'a tomato salad made of chopped tomatoes with a few slices of cucumber, and red onion'
    },
    {
        img: LemonPie,
        title: "Lemon Pie",
        price: 9.50,
        description:'a dessert pie consisting of a shortened pastry base filled with lemon curd and topped with meringue'
    },
];

function Main () {
    const specialsCards = specialsData.map((item) => {
        return (
            <Card
            key={item.title}
            image={item.img}
            title={item.title}
            price={item.price}
            description={item.description}
            />
        );
    });

    return (
        <main>
            <section className='specials'>
                <div className='top'>
                    <h1>Specials of the week</h1>
                    <button>Check our Menu</button>
                </div>
                <div className='cards'>{specialsCards}</div>
            </section>
        </main>
    );
};

export default Main