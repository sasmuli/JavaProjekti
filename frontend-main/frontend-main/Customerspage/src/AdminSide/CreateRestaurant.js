import React from 'react'
import style from './CreateRestaurant.module.css';
import { Link } from 'react-router-dom'



export default function CreateRestaurant(props) {
    return (
        <div className={style.Box_Margin}>
            <div className={style.Box}>
                <div>
                    <div className={style.Header_Style}>Restaurant information</div>
                    <div className={style.Input_Margin}>
                        <div className={style.Information_Style}>Restaurant name</div>
                        <input className={style.Input_Style} 
                        placeholder="Please enter the name of the restaurant" type="text" name="Name"
                        value={props.RestaurantValue[0].Name}
                        onChange={props.InputChange}/>
                    </div>

                    <div className={style.Input_Margin}>
                        <div className={style.Information_Style}>Restaurant address</div>
                        <input className={style.Input_Style} 
                        placeholder="Please enter the address of the restaurant" type="text" name="RestaurantAddress"
                        value={props.RestaurantValue[0].RestaurantAddress}
                        onChange={props.InputChange}/>
                    </div>

                    <div className={style.Input_Margin}>
                        <div className={style.Information_Style}>Operatin hours</div>
                        <input className={style.Input_Style} 
                        placeholder="Please enter the operating hours of the restaurant" type="text" name="OperatingHours" 
                        value={props.RestaurantValue[0].OperatingHours}
                        onChange={props.InputChange}/>
                    </div>

                    <div className={style.Input_Margin}>
                    <div className={style.Information_Style}>Select restaurant type</div>
                        <select className={style.Input_Style} type="text" name="RestaurantType" value={props.RestaurantValue[0].RestaurantType} onChange={props.InputChange}>
                             <option value="" disabled selected>Please select restaurants type</option> {props.RestaurantType.map((option)=>(<option value={option.Type}>{option.Type}</option>))}
                        </ select>
                    </div>

                    <div className={style.Input_Margin}>
                        <div className={style.Information_Style}>Select price level</div>
                        <select className={style.Input_Style} type="text" name="PriceLevel" value={props.RestaurantValue[0].PriceLevel} onChange={props.InputChange}> 
                            <option value="" disabled selected>Please select restaurants price level</option> {props.PriceLevel.map((option)=>(<option value={option.PLeve}>{option.PLevel}</option>))}
                        </select>
                    </div>
                    
                </div>
                <div className={style.Button_Margin}>
                    <Link to='/Admin'><button className={style.Button_Size}>Cancel</button></Link>
                    <button className={style.Button_Size}onClick={()=>props.CreateNewRestaurant()}>create</button>
                </div>
            </div>
            
        </div>
    )
}