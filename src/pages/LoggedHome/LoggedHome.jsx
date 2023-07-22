import { Navbar } from "../../components/Navbar/Navbar";
import { UserHomePage1, UserHomePage2, SearchBar } from "./LoggedHomeSCSS";
import { trendingContent } from "../../mock/mock.movies";
import { Card } from "../../components/Navbar/Card/Card";
import { horrorList, familyList, dramaList } from "../../mock/lists.movie";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoggedHome.css";

export const LoggedHome = () => {
  const navigate = useNavigate();

  // 1. Responsive Settings
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 2. Section 1 Pagination and Link to movie page
  const [index, setIndex] = useState(0);

  const [linkRoute, setLinkRoute] = useState(
    `/movie/${trendingContent[index]._id}`
  );

  const rightContent = () => {
    setLinkRoute((prevState) => `/movie/${trendingContent[index + 1]._id}`);
    setIndex((prevState) => prevState + 1);
  };

  const leftContent = () => {
    setLinkRoute((prevState) => `/movie/${trendingContent[index - 1]._id}`);
    setIndex((prevState) => prevState - 1);
  };

  // 3. Search movie by word area
  const { register, handleSubmit, getValues } = useForm();

  const onSearch = async (data) => {
    const { title } = data;

    navigate(`/search/${title}`);
  };

  useEffect(() => {
    if (localStorage.getItem("session") === "false") {
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    document.title = "Movies and Series - Free and ad-free | Cinemavault";
  }, []);
  return (
    <>
      <Navbar />
      <UserHomePage1>
        <h2 className="title-style">Cinemavault Top Trending 🔥</h2>
        <div className="container">
          {index > 0 ? (
            <button
              className="left-button button"
              onClick={() => leftContent()}
            >
              -
            </button>
          ) : null}
          <Link to={linkRoute}>
            <img src={trendingContent[index].banner} alt="Movie Banner" />
          </Link>

          {index < trendingContent.length - 1 ? (
            <button
              className="right-button button"
              onClick={() => rightContent()}
            >
              +
            </button>
          ) : null}
        </div>
      </UserHomePage1>
      <UserHomePage2>
        <h3>Best Free Domain Content! 🌟</h3>
        {widthScreen > 1300 ? (
          <div className="container">
            <h3>👻</h3>
            {horrorList.map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen > 1300 ? (
          <div className="container">
            <h3>😝</h3>
            {familyList.map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen > 1300 ? (
          <div className="container">
            <h3>😭</h3>
            {dramaList.map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen < 1300 && widthScreen > 1065 ? (
          <div className="container">
            <h3>👻</h3>
            {horrorList.slice(0, 4).map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen < 1300 && widthScreen > 1065 ? (
          <div className="container">
            <h3>😝</h3>
            {familyList.slice(0, 4).map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen < 1300 && widthScreen > 1065 ? (
          <div className="container">
            <h3>😭</h3>
            {dramaList.slice(0, 4).map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen < 1065 && widthScreen > 795 ? (
          <div className="container">
            <h3>👻</h3>
            {horrorList.slice(0, 3).map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen < 1065 && widthScreen > 795 ? (
          <div className="container">
            <h3>😝</h3>
            {familyList.slice(0, 3).map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen < 1065 && widthScreen > 795 ? (
          <div className="container">
            <h3>😭</h3>
            {dramaList.slice(0, 3).map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen < 795 && widthScreen > 570 ? (
          <div className="container">
            <h3>👻</h3>
            {horrorList.slice(0, 2).map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen < 795 && widthScreen > 570 ? (
          <div className="container">
            <h3>😝</h3>
            {familyList.slice(0, 2).map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen < 795 && widthScreen > 570 ? (
          <div className="container">
            <h3>😭</h3>
            {dramaList.slice(0, 2).map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen < 570 ? (
          <div className="container">
            <h3>👻</h3>
            {horrorList.slice(0, 1).map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen < 570 ? (
          <div className="container">
            <h3>😝</h3>
            {familyList.slice(0, 1).map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
        {widthScreen < 570 ? (
          <div className="container">
            <h3>😭</h3>
            {dramaList.slice(0, 1).map((item, index) => {
              return <Card key={index} props={item} />;
            })}
          </div>
        ) : null}
      </UserHomePage2>
      <SearchBar>
        <form onSubmit={handleSubmit(onSearch)}>
          <label>
            <input
              {...register("title")}
              type="text"
              placeholder="(Ex.: Superman)"
            />
          </label>
        </form>
      </SearchBar>
    </>
  );
};
