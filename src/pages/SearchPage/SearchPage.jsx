import { Navbar } from "../../components/Navbar/Navbar";
import { SearchSection } from "./SearchPageSCSS";
import { Card } from "../../components/Navbar/Card/Card";
import "./SearchPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findMovieByTitle } from "../../services/movie.service";

import error404 from "../../assets/img/error404.png";

export const SearchPage = () => {
  const { title } = useParams();

  const [movies, setMovie] = useState({});
  const [solvingPromise, setSolvingPromise] = useState(false);
  const [promiseError, setPromiseError] = useState(true);
  const [objectError, setObjectError] = useState({
    promise: true,
    notFound: false,
    message: ``,
  });

  const searchByTitle = async () => {
    const token = localStorage.getItem("token");

    setSolvingPromise(true);

    const find = await findMovieByTitle(title, token);

    setSolvingPromise(false);

    if (find.promise) {
      setPromiseError(false);
      setMovie(find.response);
    } else {
      setObjectError(find);
    }
  };

  useEffect(() => {
    searchByTitle();
  }, []);

  return (
    <>
      <Navbar />
      <SearchSection className="space-between">
        {!promiseError ? (
          <div className="container space-above">
            {movies.map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {!objectError.promise ? (
          <div className="p-color container space-above">
            <p>{objectError.message}</p>
            <img src={error404} alt="Not Found Image" />
          </div>
        ) : null}
        {solvingPromise ? (
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : null}
      </SearchSection>
    </>
  );
};
