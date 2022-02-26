import React, { useEffect, useState } from "react";

import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

function CastList(props) {
  const { category } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id);
      setCast(res.cast.slice(0, 5));
    };

    getCredits();
  }, [category, props.id]);
  return (
    <div className="casts">
      {cast.map((item, i) => (
        <div className="casts__item" key={i}>
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <div className="casts__item__name">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default CastList;
