import React from 'react'
import { Fragment } from 'react'
import { Link, Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from './../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  {id: 'Q1', author: 'Saba', text: 'Learning is fun'},
  {id: 'Q2', author: 'Maiko', text: 'Learning is great'}
]

const QuotesDetails = () => {

  const params = useParams()
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.qouteID)

  if (!quote){
    return <p>No Quotes Found</p>
  }

  return (
    <Fragment>
      <HighlightedQuote 
        text={quote.text} 
        author={quote.author}
      />
      <Route path={`/quotes/${params.qouteID}`} exact>
        <div className='centered'>
          <Link className='btn--flat' 
            to={`/quotes/${params.qouteID}/comments`}> 
              Add New Comment
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.qouteID}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuotesDetails