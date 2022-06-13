import './App.css';
import React from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
function App() {

const [data,setData]=React.useState([]);
const [page,setPage]=React.useState(1);
const [total,setTotal]=React.useState(0);

const getData=()=>
{
    fetch(`http://localhost:3001/products?_page=${page}&_limit=5`)
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
const handleSort=(e)=>
{
  let {value}=e.target;
  
  fetch(`http://localhost:3001/products?_page=${page}&_limit=5&_sort=price&_order=${value}`)
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
const handleFilter=(e)=>
{
  let {value}=e.target;
  fetch(`http://localhost:3001/products?gender=${value}`)
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
const handleDelete=(id)=>
    {
        fetch(`http://localhost:3001/products/${id}`,
        {
           method:"DELETE",
           headers:{"Content-type":"Application/json"} 
        })
        getData();
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
        <label htmlFor="sort">Sort by</label>
        <select name="sort" onChange={(Event)=>(handleSort(Event))} >
          <option value=""></option>
          <option value="asc">Low to high</option>
          <option value="desc">High to low</option>
        </select>
        <label htmlFor="filter">Filter :</label>
        <select name="filter"  onChange={(event)=>(handleFilter(event))} >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <ProductList data={data} handleDelete={handleDelete}/>
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
