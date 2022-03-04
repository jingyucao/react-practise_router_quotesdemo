import {useParams, Route, Link, useRouteMatch} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const QuoteDetail = () => {

  const DUMMY_QUOTES = [
    {id: 'q1', author: 'Jingyu', text: 'Learning React.'},
    {id: 'q2', author: 'Graham', text: 'Helping Jingyu.'},
  ]

  const match = useRouteMatch();
  const params = useParams();

  console.log(match);

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <NoQuotesFound/>
  }

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
            Load Comment
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </section>

  )
}

export default QuoteDetail;
