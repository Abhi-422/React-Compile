import { useState } from 'react'
import useCurrencyData from '../hooks/UseCurrencyData'
import InputBox from '../components/CurrencyConverter/InputBox'

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyData = useCurrencyData(from)
  const options = Object.keys(currencyData)



  const swap = () => {
    let temp = to
    let tempAmount = amount
    setTo(from)
    setFrom(temp)
    setAmount(convertedAmount)
    setConvertedAmount(tempAmount)
    console.log
  }

  const convert = () => {
    setConvertedAmount(amount * currencyData[to])
  }

  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: "url('image.png')"
      }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="Form"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => { setFrom(currency) }}
                selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0 5">
              <button
                type='button'
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
                >
                  swap
                </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => { setTo(currency) }}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
             className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
             type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CurrencyConverter