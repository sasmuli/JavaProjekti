import React, { Component } from 'react'
import AdminNavigation from './AdminNavigation'
import AdminRoutes from './AdminRoutes'
import data from './NewOrderData.json'
import historyData from './OrderHistoryData.json'


export default class AdminPage extends Component {
    constructor(props){
        super(props);
        this.state={
            item: data.NewOrderData,
            history: historyData.OrderHistoryData,
            RestaurantValue:[{Name:"",RestaurantAddress:"",OperatingHours:"",RestaurantType:"",PriceLevel:""}],
            RestaurantType:[{Type:""},{Type:"Buffet"},{Type:"Fast food"},{Type:"Fast casual"},{Type:"Casual dining"},{Type:"Fine dining"}],
            PriceLevel:[{PLevel:""},{PLevel:"€"},{PLevel:"€€"},{PLevel:"€€€"},{PLevel:"€€€€"}],
            ProductValue:[{Name:"",Description:"",Price:"",Category:""}],
            CategoryValues:[{Category:""},{Category:"Mexican"},{Category:"Indian"}],
            CategoryValue:""
        }
    }

    InputChangeP=(command)=>{
        const value = command.target.value
        const name = command.target.name
        let Array=[...this.state.ProductValue]
        Array[0][name] = value
        this.setState({ProductValue:Array})
        console.log(name)
        console.log(command.target.value)
    }

    CreateNewProduct=()=>{
        console.log(this.state.ProductValue[0].Name)
        console.log(this.state.ProductValue[0].Description)
        console.log(this.state.ProductValue[0].Price)
        console.log(this.state.ProductValue[0].Category)
    }

    InputChangeR=(command)=>{
        const value = command.target.value
        const name = command.target.name
        let Array=[...this.state.RestaurantValue]
        Array[0][name]=value
        this.setState({RestaurantValue:Array})
        console.log(name)
        console.log(command.target.value)
    }

    CreateNewRestaurant=()=>{
        console.log(this.state.RestaurantValue[0].Name)
        console.log(this.state.RestaurantValue[0].RestaurantAddress)
        console.log(this.state.RestaurantValue[0].OperatingHours)
        console.log(this.state.RestaurantValue[0].RestaurantType)
        console.log(this.state.RestaurantValue[0].PriceLevel)
    }

    InputChangeC=(command)=>{
        this.setState({CategoryValue:command.target.value})
        console.log(command.target.value)
    }

    CreateNewCategory=()=>{
        console.log(this.state.CategoryValue)
    }


    render(){
        return (
            <div>
                <div> <AdminNavigation/> </div>
                <div> <AdminRoutes 
                items={this.state.item} 
                history={this.state.history}
                
                ProductValue={this.state.ProductValue}
                CreateNewProduct={this.CreateNewProduct}
                InputChangeP={this.InputChangeP}
                
                RestaurantValue={this.state.RestaurantValue}
                CreateNewRestaurant={this.CreateNewRestaurant}
                InputChangeR={this.InputChangeR}

                CategoryInputs={this.state.CategoryValue}
                CreateNewCategory={this.CreateNewCategory}
                InputChangeC={this.InputChangeC}
                CategoryValues={this.state.CategoryValues}
                
                RestaurantType={this.state.RestaurantType}
                PriceLevel={this.state.PriceLevel}/>

                </div>
            </div>
            
        )
    }
    
}