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
      document.title = `Error 404`;
    } else {
      setMovie(find);
      document.title = `${find.response.name} | Watch on Cinemavault`;
    }
  };

  useEffect(() => {
    searchMovieById();
  }, []);
  return (
    <>
      <Navbar />
      <MovieSection>
        <div className="space-between-mp">
          {movie.promise ? (
            <h2 className="title-mp">{movie.response.name}</h2>
          ) : null}
          {movie.promise ? (
            <img
              className="banner-mp"
              src={movie.response.banner}
              alt="Movie Banner Image"
            />
          ) : null}
          {movie.promise ? (
            <p className="p-mp">
              {movie.response.sinopse} - <b>{movie.response.year}</b>
            </p>
          ) : null}
          {movie.promise ? (
            <a href={movie.response.play} target="_blank">
              <img src={play} alt="Play Movie Icon" />
            </a>
          ) : null}
          {promiseError.notFound && !solvingPromise ? (
            <p>Movie not found or Session Expired!</p>
          ) : null}
          {promiseError.notFound && !solvingPromise ? (
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
