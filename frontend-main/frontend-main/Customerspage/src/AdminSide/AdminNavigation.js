import React from 'react'
import style from './Admin.module.css'
import { Link } from 'react-router-dom'

export default function AdminNavigation() {
    return (
        <div>
            <div className={style.button_margin}>
                <Link to="/Admin/OrderHistory"><button className={style.button_place}>History</button></Link>
                <Link to="/Admin/Orders"><button className={style.button_place}>Orders</button></Link>
                <Link to="/Admin/CreateCategory"><button className={style.button_place}>CreateCategory</button></Link>
                <Link to="/Admin/CreateProduct"><button className={style.button_place}>Createproduct</button></Link>
                <Link to="/Admin/CreateRestaurant"><button className={style.button_place}>CreateRestaurant</button></Link>
            </div>
        </div>
    )
}