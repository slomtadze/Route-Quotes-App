import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {id: 'Q1', author: 'Saba', text: 'Learning is fun'},
  {id: 'Q2', author: 'Maiko', text: 'Learning is great'}
]

const QuotesAll = () => {
  return ( 
    <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default QuotesAll;