import './App.css';
import React from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
function App() {

const [data,setData]=React.useState([]);
const [page,setPage]=React.useState(1);
const [total,setTotal]=React.useState(0);
const [sortValue,setsortValue]=React.useState("");
const getData=()=>
{
    fetch(`http://localhost:3001/products?_page=${page}&_limit=5`)
    .then((res)=>
      res.json()
    )
    .then((res)=>
    { 
      
      console.log(res);
      //setTotal(maxtotal);
      setData(res)
      
    })
    .catch((error)=>
    {
      console.log(error);
    })
}
const handleSort=(e)=>
{
  let {value}=e.target;
  console.log(value);
  setsortValue(value);
  fetch(`http://localhost:3001/products?_sort=price&_order=${sortValue}`)
    .then((res)=>
      res.json()
    )
    .then((res)=>
    { 
      
      setData(res)
      
    })
    .catch((error)=>
    {
      console.log(error);
    })
}
React.useEffect(
  ()=>{
    getData()
   
  },[page])
  return (
    <div>
      <div style={{textAlign:"center",border:"1px solid black", width:"40%", margin:"auto"}}>
        <h2 style={{textAlign:"center"}}>Product Details Form</h2>
        <ProductForm getData={getData}/>
      </div>
      <div>
        <label htmlFor="sort"></label>
        <select name="sort" value={sortValue} onChange={(Event)=>(handleSort(Event))} >
          <option value="asc">Low to high</option>
          <option value="desc">High to low</option>
        </select>
        <ProductList data={data}/>
        <div style={{display:"flex",justifyContent:"space-between",}}>
        <button style={{height:"25px"}} onClick={()=>setPage(page-1)} disabled={page===1}>Previous</button>
        <h1>{page}</h1>
        <button style={{height:"25px"}} onClick={()=>setPage(page+1)} disabled={page===total}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
