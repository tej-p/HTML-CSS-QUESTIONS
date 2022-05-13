import React, { useState } from "react";
import axios from "axios";

export const FetchAPI = () => {
  const [news, setNews] = useState([]);
  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=6291edf4471a4944912c524fc5c178a4"
      )
      .then((res) => {
        console.log(res);
        setNews(res.data.articles);
      });
  };

//   content: "Taj Mahal is protected by the Archaeological Survey of India.\r\nNew Delhi: The Allahabad High Court today rejected the petition seeking an inquiry into the \"history\" of Taj Mahal. The court dismissed … [+866 chars]"
// description: "The Allahabad High Court today rejected the petition seeking an inquiry into the \"history\" of Taj Mahal. The court dismissed the petition which asked for opening of the doors of its 22 rooms to see \"the truth, whatever it is.\""
// publishedAt: "2022-05-12T10:10:23Z"
// source: {id: null, name: 'NDTV News'}
// title: "Taj Mahal's 22 Doors Stay Locked, \"Issue Should Be Left With Historians\": Court - NDTV"
// url: "https://www.ndtv.com/india-news/taj-mahals-22-closed-doors-wont-be-opened-high-court-rejects-petition-2969176"
// urlToImage: "https://c.ndtvimg.com/2022-04

  return (
    <>
      <button className="btn btn-primary" onClick={fetchNews}>
        Fetch
      </button>

      <div>
          {news.map(e => (
              <div className="container">
                  <div className="row" key={e.url}>
                        <h3><b>{e.title}</b></h3>
                        <img src={e.urlToImage} alt="" height={100}/>
                        <p>{e.description}</p>
                </div>
              </div> 
          ))}
      </div>
    </>
  );
};
