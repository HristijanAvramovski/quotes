
import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import QuotesService from '../../repository/quotesRepository';
import Quote from '../Quote/quote';
import ListQuotes from '../ListQuotes/listQuotes';
import {BrowserRouter as Router, Redirect, Route, Routes} from 'react-router-dom';
import AddQuote from '../AddQuote/addQuote';
import RandomQuote from '../RandomQuote/randomQuote';
function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [quotesWithLimit, setQuotesWithLimit] = React.useState([]);
  useEffect(() => {
    // this function will be fired when the component is mounted
    QuotesService.fetchQuoteByCategory()
    .then((response) => setQuotes(response.data))
    QuotesService.fetchQuotesByCategoryWithlimit()
    .then((response) => setQuotesWithLimit(response.data))
  }, []); // the empty array as second parameter ensures that the function is only fired once
  function addQuote(quote){
    setQuotesWithLimit((preQuotesWithLimit) => {
        return [...preQuotesWithLimit, quote];
    })
}
  return (
    <Router>
          <Routes>
            <Route path="/" element={
              <Fragment>
                <RandomQuote quotes={quotes}/>
                <ListQuotes quotes={quotesWithLimit}/>
              </Fragment>} />
            <Route path="/quotes/add" element={<AddQuote addQuote={addQuote}/>}/>
          </Routes>
    </Router>
  );
}

export default App;

