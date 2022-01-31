import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  errorSelector,
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
} from "../redux/quotesSlice";
function Quotes() {
  const quotes = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error === "error") {
    return <div>Error! {error.message}</div>;

  }
  console.log(quotes);
  return (
    <>
      {status === "idle" && <div>Loading...</div>}
      {status === "succeeded" && (
        <div>
          <h1>Quotes</h1>
          <Link to="/" >Home</Link>
          <ul>
            {status === "succeeded" &&
              quotes.map((quote) => (
                <li key={quote.quote_id}>
                    <a href="#/">{quote.quote}</a>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Quotes;
