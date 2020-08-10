import React, { Component } from 'react';
import NavbarComponent from './components/NavbarComponent';
import JumbotronComponent from './components/JumbotronComponent';
// import TableComponent from './components/TableComponent';
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import EditUserContainer from './containers/EditUserContainer';
import DetailUserContainer from './containers/DetailUserContainer';


export default class App extends Component {
  state = {
    title: "Profile",
    users: [
      {
        id: 1,
        nama: 'Ais',
        alamat: 'Tangerang',
        umur: 28,
        noHp: '123123123'
      },
      {
        id: 2,
        nama: 'Buluk',
        alamat: 'Bsd',
        umur: 28,
        noHp: '08912323'
      },
      {
        id: 3,
        nama: 'sandy',
        alamat: 'Tangsel',
        umur: 28,
        noHp: '0815466575'
      },
      {
        id: 4,
        nama: 'carrel',
        alamat: 'Kelapa Gading',
        umur: 26,
        noHp: '0815466575'
      },
      {
        id: 5,
        nama: 'ibnu',
        alamat: 'Tangsel',
        umur: 28,
        noHp: '0815466575'
      },
      {
        id: 6,
        nama: 'afif',
        alamat: 'Tangsel',
        umur: 28,
        noHp: '0815466575'
      },
      {
        id: 7,
        nama: 'mamat',
        alamat: 'Tangsel',
        umur: 28,
        noHp: '0815466575'
      },
      {
        id: 8,
        nama: 'dudung',
        alamat: 'Tangsel',
        umur: 28,
        noHp: '0815466575'
      },
      {
        id: 9,
        nama: 'dadang',
        alamat: 'Tangsel',
        umur: 28,
        noHp: '0815466575'
      },
      {
        id: 10,
        nama: 'roam',
        alamat: 'Tangsel',
        umur: 28,
        noHp: '0815466575'
      },
      {
        id: 11,
        nama: 'doch',
        alamat: 'Tangsel',
        umur: 28,
        noHp: '0815466575'
      },
    ]
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        {/* <TableComponent  users={this.state.users}/> */}
        <BrowserRouter>
            <Route path="/" exact>
                <HomeContainer users={this.state.users}/>
            </Route>
            <Route path="/create" exact>
                <CreateUserContainer />
            </Route>
            <Route path="/detail/:id" exact>
                <DetailUserContainer />
            </Route>
            <Route path="/edit/:id" exact>
                <EditUserContainer />
            </Route>
        </BrowserRouter>
      </div>
    )
  }
}
