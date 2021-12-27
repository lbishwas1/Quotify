import React from 'react'
import './QuoteContent.css'


export default function QuoteContent(props) {
  console.log(props)
    return  <div className="quote-content">
    <div className='text'>"{props.quote}"</div>
    <div className="author">-{props.author}</div>
  </div>;
  }