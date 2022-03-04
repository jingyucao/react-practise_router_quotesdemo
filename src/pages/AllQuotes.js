import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Jingyu', text: 'Learning React.'},
  {id: 'q2', author: 'Graham', text: 'Helping Jingyu.'},
]

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  )
};

export default AllQuotes;
