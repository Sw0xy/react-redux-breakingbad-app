import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import { fetchCharacters } from "../redux/charactersSlice";

function Home() {
 
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const page = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle'){
      dispatch(fetchCharacters());
    }
  }, [dispatch,status]);
  console.log(characters);
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error! {error.message}</div>;
  }
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {characters.map((character) => (
          <Link to={`/characters/${character.char_id}`} key={character.char_id}>
            <CharacterCard key={character.char_id} character={character} />
          </Link>
        ))}
      </ul>
      {hasNextPage && status !== "loading" && (
        <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
          <button onClick={() => dispatch(fetchCharacters(page))}>
            load more {page}
          </button>
        </div>
      )}
      {!hasNextPage && <h2>There is nothing to be shown.</h2>}
    </div>
  );
}

export default Home;
