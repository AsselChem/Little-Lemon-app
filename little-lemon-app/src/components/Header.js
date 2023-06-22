import React from 'react' ;
import { Link } from 'react-router-dom';
import intropic from '../images/intropic.jpeg';
import './Header.css';
const Header = () => {
    return (
        <header> 
            <div className='left-side'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are family owned Mediterrranean restaurant serving good Food. Come visit us!
                </p>
                <button>
                    <Link to='/booking'>Book a table</Link>
                </button>
            </div>
            <div className='right-side'>
                <img 
                    src={intropic}
                    alt="introduction picture with our food"
                    width="214" 
                    height="428"
                />
            </div>
        </header>
    )
}
export default Header