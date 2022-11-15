import React from 'react'
import styles from './LogIn.module.css'

class LogIn extends React.Component {
    render () {
        return (
            <div className = {styles.container}>
            <div className = {styles.topBar}><div style = {{alignSelf: 'center'}}>Log In</div></div>
            <div className={styles.LogIn}>
            
            <div style = {{fontWeight: '500', marginBottom: '20px'}}>Welcome back!</div>
                <input type="text" placeholder="E-mail" className ={styles.inputs}/>
                <input type="password" placeholder="Password" className = {styles.inputs}/>
                <button className = {styles.button}><div style = {{fontSize: '25px',fontWeight: '500'}}>Log in</div></button>
            </div>
            </div>
        );
    }
    
}

export default LogIn;