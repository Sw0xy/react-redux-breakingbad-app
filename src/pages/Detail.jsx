import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();
  console.log(data);

  useEffect(() => {
    axios
      .get(`https://www.breakingbadapi.com/api/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setData(data[0]))
      .finally(() => setLoading(false));

  }, [char_id]);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <img src={data.img} alt={data.name} />
        </div>
      )}
    </div>
  );
}

export default Detail;
