import React from 'react'
import style from './CreateRestaurant.module.css';
import { Link } from 'react-router-dom'


export default function CreateCategory(props) {
    return (
        <div className={style.Box_Margin}>
            <div className={style.Box_Category}>
                <div>
                    <div className={style.Header_Style}>Create a new category</div>
                    <div className={style.Input_Margin}>
                        <div className={style.Information_Style}>Category</div>
                        <input className={style.Input_Style} placeholder="Please enter the name of the category" type="text" value={props.CategoryInputs} 
                        onChange={props.InputChangeC}/>
                        </div>
                        <div className={style.Button_MarginCategory}>
                    <Link to='/Admin'><button className={style.Button_Size}>Cancel</button></Link>
                    <button className={style.Button_Size} onClick={()=>props.CreateNewCategory()}>create</button>
                </div>
                </div>
            </div>
        </div>
    )
}