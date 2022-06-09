// import logo from './logo.svg';
import "./App.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [item, setItem] = useState([]);
  const [pages, setPages] = useState(0);
  const [sortValue, setSortValue] = useState("");
  const limit = 25;
  const sortOptions = ["id", "date", "first_name"]

  useEffect(() => {
    const getPhotos = async () => {
      const res = await fetch(
        `http://localhost:3005/data?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      // console.log("result : ",data)
      const total = res.headers.get("x-total-count");
      // console.log("photos : ", total)
      // console.log("total - ",Math.ceil(total/25))
      setPages(total / 25);
      setItem(data);
    };

    getPhotos();
  }, []);

  // console.log(item);

  const fetchPhotos = async (pageNo) => {
    // var data = null;
    // axios.get(`http://localhost:3005/data?_page=${pageNo}&_limit=25`).then((res) => {
    //     console.log(res.data);
    //     data = res.data;
    //   });
    //   return data;

    const res = await fetch(
      `http://localhost:3005/data?_page=${pageNo}&_limit=${limit}`
    );
    const data = await res.json();
    console.log("newData : ", data);
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    let pageNo = data.selected + 1;
    const photos = await fetchPhotos(pageNo);
    setItem(photos);
  };

  const handleChange = () => {
    console.log(1);
  }

  return (
    <div className="App">
      <div>
        <h5>Sort by - </h5>
        <select onChange={handleChange} value={sortValue}>
          <option>Select value</option>
          {sortOptions.map((e, i) => (
              <option value={e} key={i}>{e}</option>
          )) }
        </select>
      </div>
      <div className="mainDiv">
        {item.map((e) => (
          <div key={e.id} className="itemDiv">
            <img className="images" alt={""} src={e.img_url}></img>
            <h5>
              {e.id} - {e.first_name}
            </h5>
            <h6>{e.gender}</h6>
            <p>{e.date}</p>
          </div>
        ))}
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pages}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;
