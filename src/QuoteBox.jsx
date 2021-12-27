import React, { Component,useState } from 'react'
import './QuoteBox.css'
import Button from './components/Button'
import QuoteContent from './QuoteContent';
import Quotes from './quotes.json'

//Quote Box Component
class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['#bdb2ff','#FFD6A5','#FDFFB6','#CAFFBF','#9BF6FF','#A0C4FF','#BDB2FF','#FFC6FF'],
      quotes: Quotes,
      quoteNo:0
    };
  }

  ChangeColor(){
    const { colors,quotes,quoteNo } = this.state;
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
    {/*console.log(color)*/}
    this.setState({quoteNo : Math.floor(Math.random()* quotes.length)})

  }
 ShareTweet(){
  const url =
  'https://twitter.com/intent/tweet?'
 }
 
  render() { 
    const {quotes,author,category,quote,quoteNo} =this.state
 {/*   console.log(quoteNo)
    console.log(quotes[quoteNo])
 console.log(quotes[quoteNo].author)*/}
 console.log()
    return (
      <main className="quote-box">
       <QuoteContent quote={this.state.quotes[quoteNo].quote} author={this.state.quotes[quoteNo].author}/>
      <div className="button_wrapper">
       <Button name='Next' onClick={()=>{this.ChangeColor()}} />
       <Button name='Share' onClick={()=>{this.ShareTweet()}}/>
       </div>
       {/*<Button name='Share'/>*/}
       <div>

</div>
      </main>
    );
  }
}  

export default QuoteBox;