import React, { Component } from 'react';
import Nav from './Nav';
import Search from './Search';
import Card from './Card';
import 'bulma/css/bulma.css'

const obj = {
            title   : ['Nehad', 'car', 'Nono'],
            name    : ['Cars', 'Home', 'Pets'],
            desc    : ['PHP', 'C++', 'Java'],
            detail  : ['Okay let do it', 'C++ Can do alot', 'Java is powerfull']
}

class Header extends Component {
  render(){
    return (<div><Nav /><Search /><Card data={obj}/> </div>);
  }
}
export default Header ;
