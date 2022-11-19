import React, { Component } from 'react'
import "./Home.scss"
import NavBar from '../../Componants/navbar/navbar';
import Featured from '../../Componants/Featured/Featured';
import List from '../../Componants/List/List';
class Home extends Component {
    
    render() { 
        return (
        <div className='home'>
           <NavBar/>
           
           <Featured type="movie"/>
           <List/>
           <List/>
           <List/>
           <List/>
        </div>);
    }
}
 
export default Home;