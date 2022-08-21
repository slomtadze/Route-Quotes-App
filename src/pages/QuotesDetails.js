import React from 'react'
import { Fragment } from 'react'
import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'

const QuotesDetails = () => {

  const params = useParams()

  return (
    <Fragment>
      <h1>QuotesDetails</h1>
      <p>{params.qouteID}</p>
      <Route path={`/quotes/${params.qouteID}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuotesDetails