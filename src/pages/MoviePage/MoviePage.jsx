import { Navbar } from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { MovieSection } from "./MoviePageSCSS";
import { trendingContent } from "../../mock/mock.movies";
import { findMovieById } from "../../services/movie.service";
import { useEffect, useState } from "react";
import "./MoviePage.css";
import play from "../../assets/img/play.png";
import error404 from "../../assets/img/error404.png";

export const MoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({ promise: false, message: "" });
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));
  const [solvingPromise, setSolvingPromise] = useState(false);
  const [promiseError, setPromiseError] = useState({
    promise: false,
    notFound: false,
    message: "",
  });

  const searchMovieById = async () => {
    setSolvingPromise(true);
    const find = await findMovieById(id, authToken);
    setSolvingPromise(false);

    if (!find.promise) {
      setPromiseError(find);
    } else {
      setMovie(find);
    }
  };

  useEffect(() => {
    searchMovieById();
  }, []);
  return (
    <>
      <Navbar />
      <MovieSection>
        <div className="space-between">
          {" "}
          {movie.promise ? <h2>{movie.response.name}</h2> : null}
          {movie.promise ? (
            <img src={movie.response.banner} alt="Movie Banner Image" />
          ) : null}
          {movie.promise ? (
            <p>
              {movie.response.sinopse} - <b>{movie.response.year}</b>
            </p>
          ) : null}
          {movie.promise ? (
            <a href={movie.response.play} target="_blank">
              <img src={play} alt="Play Movie Icon" />
            </a>
          ) : null}
          {promiseError.notFound ? <p>{promiseError.message}</p> : null}
          {promiseError.notFound ? (
            <img src={error404} alt="Error Image" />
          ) : null}
          {solvingPromise ? (
            <div className="lds-default">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : null}
        </div>
      </MovieSection>
    </>
  );
};
