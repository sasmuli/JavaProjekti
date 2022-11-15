import React from 'react'
import OrderHistory from './OrderHistory'
import CreateProduct from'./CreateProduct'
import CreateRestaurant from './CreateRestaurant'
import CreateCategory from './CreateCategory'
import {Routes,Route} from "react-router-dom"
import ReceiveOrder from './ReceiveOrder'


export default function AdminRoutes (props) {
     
        return (
            <div>
                <Routes>
                    <Route path="/OrderHistory" element={props.history.map(element=><OrderHistory {...element}/>)}/>
                    
                    <Route path="/CreateProduct" element={<CreateProduct CreateNewProduct={props.CreateNewProduct} ProductValue={props.ProductValue} InputChange={props.InputChangeP}  SelectValue={props.SelectValue} CategoryValues={props.CategoryValues}/>}/>
                    
                    <Route path="/CreateCategory" element={<CreateCategory CreateNewCategory={props.CreateNewCategory} CategoryInputs={props.CategoryValue} InputChangeC={props.InputChangeC}/>}/>
                    
                    <Route path="/CreateRestaurant" element={<CreateRestaurant CreateNewRestaurant={props.CreateNewRestaurant} RestaurantValue={props.RestaurantValue} InputChange={props.InputChangeR} RestaurantType={props.RestaurantType} PriceLevel={props.PriceLevel}/>}/>
                    
                    <Route path="/Orders" element={props.items.map(elememt=><ReceiveOrder {...elememt}/>)}/>
                </Routes>
            </div>
        );
}