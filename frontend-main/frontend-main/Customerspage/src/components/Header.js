import React from "react";
import styles from './Header.module.css'
import { Link } from 'react-router-dom'


export default function Header() {

    const mainStyle = { paddingLeft: '4%', paddingRight: '3%' };

    return (
        <div className={ styles.header }>
            <div className={ styles.container }>
                <div className={styles.brand}>Restaurant X</div>
                <div style={mainStyle}><Link to="/"><button>Home</button> </Link> </div>
                <div style={mainStyle}><Link to="Restaurants"><button>Restaurants</button> </Link> </div>
                <div style={mainStyle}><Link to="shoppingcart"> <button>Shopping cart</button> </Link> </div>
                <div style={mainStyle}><Link to="LogIn"> <button>Log in</button> </Link> </div>
                <div style={mainStyle}><Link to="/Admin"><button>Admin</button></Link></div>
                <div style={mainStyle}><Link to="Search"> <button>Search</button> </Link> </div>
            </div>
        </div>
    )
}