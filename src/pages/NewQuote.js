import QuoteForm from './../components/quotes/QuoteForm'

const NewQuote = () => {

  const newQuoteHandler = (quoteData) => {
    console.log(quoteData)
  }

  return (
    <QuoteForm onAddQuote={newQuoteHandler}/>
  )
}

export default NewQuote