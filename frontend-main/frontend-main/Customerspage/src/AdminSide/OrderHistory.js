import React from 'react'
import style from './OrderHistory.module.css'
import Product from './Product'

export default function OrderHistory(props) {
    return (
        <div>
            <div className={style.Box_Margin}>
                <div className={style.Box}>
                    <div className={style.Box_Content}>
                            <div> <span className={style.Text_Style1}>Order Number {props.OrderNumber}</span> </div>
                                <div className={style.Box_Flex}><div>
                                        <div className={style.Text_Style2}>Restaurant name:</div>
                                        <div>
                                            <div className={style.Info_Text}>Customer Info</div>
                                            <div>Customers name: {props.CustomerName}</div>
                                            <div>Address: {props.Address}</div>
                                            <div>Zip Code: {props.ZipCode}</div>
                                        </div>
                                    </div>
                                    <div className={style.Box_Products}>
                                        <div className={style.Text_Style3}>Products:</div>
                                    {props.ProductsOrdered.map(element=> <Product {...element}/>)}
                                    </div>
                                    <div className={style.Status_Margin}>
                                    <div>
                                        Order status: {props.Status}
                                        </div>
                                        <div className={style.Text_Style4}>Receive time: {props.Time} </div>
                                        <div className={style.Text_Style5}>Total Price: {props.TotalPrice}</div>
                                    </div>
                                    </div>
                                </div>       
                    </div>
                </div>
            </div>
        
    )
}