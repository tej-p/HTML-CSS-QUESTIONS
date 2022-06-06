// import logo from './logo.svg';
import './App.css';
import ReactPaginate from "react-paginate";

function App() {
  const handlePageClick = () => {
    console.log("clicked");
  }


  return (
    <div>
      <ReactPaginate
        previousLabel = {"previous"}
        nextLabel = {"next"}
        breakLabel = {"..."}
        pageCount = {15}
        marginPagesDisplayed = {3}
        pageRangeDisplayed = {3}
        onPageChange = {handlePageClick}
        containerclassName={"pagination"}
        pageClassName = {"page-item"}
        pageLinkClassName = {"page-link"}
        previousClassName ={"page-item"}
        previousLinkClassName = {"page-link"}
        nextClassName ={"page-item"}
        nextLinkClassName ={"page-link"}
        breakClassName ={"page-item"}
        breakLinkClassName = {"page-link"}
      />
    </div>
  );
}

export default App;
