import React, { useEffect, useState } from 'react'
import './style.css'

const QuoteGeneretor = () => {

    const[quote,setQuote] = useState([])

    const fetchQuoteApi = async()=>{
        const response =await fetch('https://api.adviceslip.com/advice');
        const result = await response.json();
        setQuote(result.slip);
    }

    useEffect(()=>{
            fetchQuoteApi()
    },[])
    return (
        <div className='mainHead'>
            <div className="quoteSec">
             <div className="quote-content">
             <h2>{quote.advice}</h2> 
             <button className='quoteBtn' onClick={()=> fetchQuoteApi()}>Get a Quote</button>
             </div>
            </div>
        </div>
    )
}

export default QuoteGeneretor
