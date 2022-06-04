import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import InfiniteScroll from 'react-infinite-scroll-component';


function App() {
  const [i, setI] = useState([]);
  const [page, setPage] = useState(2);
  const [m, setM] = useState(true);

  useEffect(()=> {
    const getData = async () => {
         const res = await fetch(
           `http://localhost:8080/data?_page=1&limit=15`
         );
         const data = await res.json();
         setI(data);
    }
    getData();

  },[])

  const fetchComments = async () => {
   const res = await fetch(
     `http://localhost:8080/data?_page=${page}&limit=10`
   );
   const data = await res.json();
   return data;
  }


  const fetchData = async () => {
    const I_Details = await fetchComments();

    setI([...i , ...I_Details]);

    if(I_Details.length === 0 || I_Details.length<10){
      setM(false);
    }
    

    setPage(page+1);
  }

  return (
    <div className="App">
      
    <InfiniteScroll
       className="d1"
      dataLength={i.length} //This is important field to render the next data
      next={fetchData}
      hasMore={m}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Finish!</b>
        </p>
      }
    >
      <h1>INFINITE SCROLL-UP</h1>
      <div>
       {i.map((elem) => {
        return <div key={elem.id} className="d2" >
        {/* {elem.completed === true ? <div className='green'>{elem.id}</div> : <div className='red'>{elem.id}</div>}   */}
         <div style={{fontSize:"18px", fontWeight:"bolder"}}>{elem.first_name}</div>
         <div style={{fontSize:"18px", fontWeight:"bolder"}}>{elem.last_name}</div>
        
        </div>
      })}

    </div>
     
</InfiniteScroll>
  </div>
   
  );
}



export default App
