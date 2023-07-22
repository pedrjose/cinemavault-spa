import { Genres } from "./GenreModalSCSS";
import { useNavigate } from "react-router-dom";

export const GenreModal = () => {
  const navigate = useNavigate();

  const searchAdventureMovies = () => {
    navigate("/genre/adventure");
    window.location.reload();
  };

  const searchAnimationMovies = () => {
    navigate("/genre/animation");
    window.location.reload();
  };

  const searchBiographyMovies = () => {
    navigate("/genre/biography");
    window.location.reload();
  };

  const searchComedyMovies = () => {
    navigate("/genre/comedy");
    window.location.reload();
  };

  const searchCollectionMovies = () => {
    navigate("/genre/collection");
    window.location.reload();
  };

  const searchDocumentaryMovies = () => {
    navigate("/genre/documentary");
    window.location.reload();
  };

  const searchDramaMovies = () => {
    navigate("/genre/drama");
    window.location.reload();
  };

  const searchHorrorMovies = () => {
    navigate("/genre/horror");
    window.location.reload();
  };

  return (
    <>
      <Genres>
        <button onClick={() => searchAdventureMovies()}>Adventure</button>
        <button onClick={() => searchAnimationMovies()}>Animation</button>
        <button onClick={() => searchBiographyMovies()}>Biography</button>
        <button onClick={() => searchComedyMovies()}>Comedy</button>
        <button onClick={() => searchCollectionMovies()}>Collection</button>
        <button onClick={() => searchDocumentaryMovies()}>Documentary</button>
        <button onClick={() => searchDramaMovies()}>Drama</button>
        <button onClick={() => searchHorrorMovies()}>Horror</button>
      </Genres>
    </>
  );
};
