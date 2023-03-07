import React, { useEffect, useState } from 'react'
import Currency from '../components/Currency'

function CryptoContainer() {
  const [currencies, setCurrencies] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1'
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrencies(data))
      .catch((error) => console.log('Error:', error))
  }, [])
  console.log(currencies)

  return (
    <div>
      <Currency currencies={currencies} />
    </div>
  )
}

export default CryptoContainer
