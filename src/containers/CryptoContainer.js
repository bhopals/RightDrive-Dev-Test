import React, { useEffect, useState } from 'react'
import Currency from '../components/Currency'
import { StyledEngineProvider } from '@mui/material/styles'
import CurrencyList from '../components/CurrencyList'
import CurrencyCard from '../components/CurrencyCard'

function CryptoContainer() {
  const [currencies, setCurrencies] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1'
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrencies(data))
      .catch((error) => console.log('Error>>:', error))
  }, [])
  console.log(currencies)

  return (
    <div>
      <Currency currencies={currencies} />;
      <StyledEngineProvider injectFirst>
        <CurrencyList currencies={currencies} />
        <CurrencyCard currencies={currencies} />
      </StyledEngineProvider>
    </div>
  )
}

export default CryptoContainer
