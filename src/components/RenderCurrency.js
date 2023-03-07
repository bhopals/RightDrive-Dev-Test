import React from 'react'

function RenderCurrency({ currency }) {
  return (
    <div className="coin-row">
      <p>{currency.market_cap_rank}</p>
      <div className="flex items-center">
        <img src={currency.image} alt={currency.name} className="h-10 mr-2 w-auto" />
        <p>{currency.symbol.toUpperCase()}</p>
      </div>
      <p>${currency.current_price.toLocaleString()}</p>
      <p>{currency.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hide-mobile">${currency.total_volume.toLocaleString()}</p>
      <p className="hide-mobile">${currency.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default RenderCurrency
