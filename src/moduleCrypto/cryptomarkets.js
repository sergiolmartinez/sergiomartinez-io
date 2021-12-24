import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { CRYPTO_API_URL } from '../config';
import Coin from './coin';
import './cryptomarkets.css'
import './coin.css'

// Author: Sergio Martinez
// Date Created: 24 Dec 2021
// Current Version: 0.1


function CryptoMarket() {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    // within the catch function below change the conle.log to an alert with an error message
    useEffect(() => {
        axios.get(`${CRYPTO_API_URL}`)
        .then(res => {
            setCoins(res.data);
        }).catch(error => console.log(error));
    },[]);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())   
        )

    return (
    <div className="crypto-main">      
      <Nav />
      <div className="container-fluid main-body">
        <div className="row ">
          <div className="col-md-2"></div>
          <div className="col-md-8 my-header">
            <h3>Project: Crypto Markets</h3>
            <p className='my-note'>  Created by following <a className="link-info text-decoration-none note-link" href='https://youtu.be/9ohK7CapmIs' target="_blank">React API Project - Cryptocurrency Finance Price Tracker App Using Hooks and Axios by Brian Design</a></p> 
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row my-crypto">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 coin-app">
              <div className="coin-search">
                <h4 className="coin-text">Search a Cryptocurrency</h4>
                <FormGroup>
                    <FormControl
                        className="coin-input"
                        input="text"
                        placeholder="search"
                        onChange={ handleChange }
                    />
                </FormGroup>
                { filteredCoins.map(coin => {
                    return <Coin 
                    key={ coin.id } 
                    coinname={ coin.name } 
                    coinimage={ coin.image } 
                    coinsymbol={ coin.symbol }
                    coinvolume={ coin.total_volume }
                    coinprice={ coin.current_price }
                    coinpriceChange={ coin.price_change_percentage_24h }
                    coinmarketcap={ coin.market_cap }
                    />;
                }) }
            <br />
            </div>
          <div className="col-sm-2"></div>
        </div>
        </div>
        <Footer />

      </div>
      </div>
    )

} 

export default CryptoMarket

