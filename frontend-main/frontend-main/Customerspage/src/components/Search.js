/*import React from 'react'
import JSONDATA from './MOCK_DATA.json'
import input from './Search.module.css'
import Page from './Search.module.css'
import {useState} from 'react'


export default function App() {
    const [searchTerm, setSearchTerm]=useState('')
    return (
        <div classname="Search">
            <input type ="text" placeholder="Search" 
            onChange={event =>
            {setSearchTerm(event.target.value)
            }}      
            />
            {JSONDATA.filter((val)=>{
                if (searchTerm==""){
                    return val}
                else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            
            }).map((val,key)=> {
                return (
                    <div className="user" key={key}> 
                <p> {val.first_name}</p>
                </div>
                )
            })}
        </div>
    )
}*/