import React from 'react'

const Coin = ({ coinimage, coinname, coinsymbol, coinprice, coinvolume, coinpriceChange, coinmarketcap }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={ coinimage } alt="crypto"/>
                    <h1>{ coinname }</h1>
                    <p className="coin-symbol">{ coinsymbol }</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price"> ${ coinprice.toLocaleString() }</p>
                    { coinpriceChange < 0 ? (
                        <p className="coin-percent red">{ coinpriceChange.toFixed(2) }%</p>
                    ) : (
                        <p className="coin-percent green">{ coinpriceChange.toFixed(2) }%</p>
                    )  
                }
                    <p className="coin-volume">${ coinvolume.toLocaleString() }</p>
                    
                <p className="coin-marketcap">
                    Mkt Cap: ${ coinmarketcap.toLocaleString() }
                </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
