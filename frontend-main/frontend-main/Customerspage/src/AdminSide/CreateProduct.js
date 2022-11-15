import React from 'react'
import style from './CreateProduct.module.css';
import {Link} from 'react-router-dom'

export default function CreateProduct(props) {
    return (
        <div className={style.Box_Margin}>
            <div className={style.Box}>
                
                <div>
                    <div className={style.Header_Style}>Product information</div>
                    <div className={style.Input_Margin}>
                        <div className={style.Information_Style}>Name</div>
                        <input className={style.Input_Style}
                        placeholder="Please enter the name of the product" type="text" name="Name" 
                        value={props.ProductValue[0].Name}
                        onChange={props.InputChange}/>
                    </div>

                    <div className={style.Input_Margin}>
                        <div className={style.Information_Style}>Description</div>
                        <input className={style.Input_Style}
                        placeholder="Please enter description of the product" type="text" name="Description"
                        value={props.ProductValue[0].Description}
                        onChange={props.InputChange}/>
                    </div>

                    <div className={style.Input_Margin}>
                        <div className={style.Information_Style}>Price</div>
                        <input className={style.Input_Style}
                        placeholder="Please enter price of the product" type="text" name="Price" 
                        value={props.ProductValue[0].Price}
                        onChange={props.InputChange}/>
                    </div>

                    <div className={style.Input_Margin}>
                        <div className={style.Information_Style}>Category</div>
                        <select className={style.Input_Style} name="Category" value={props.ProductValue[0].Category} onChange={props.InputChange}>
                            <option value="" disabled selected>Please select category for the product</option> {props.CategoryValues.map((option)=>(<option value={option.Category}>{option.Category}</option>))}
                        </select>
                    </div>
                </div>

                <div className={style.Button_Margin}>
                    <Link to='/Admin'><button className={style.Button_Size}>Cancel</button></Link>
                    <button className={style.Button_Size}onClick={()=>props.CreateNewProduct()}>create</button>
                </div>
            </div>
            
        </div>
    )
}