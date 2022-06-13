import React from "react";

function ProductList({data ,handleDelete}){
    
    
    return(
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",textAlign:"center",padding:"10px"}}>
        {
            data.map((item)=>(
                <div
                key={item.id}>
                    <img 
                    style={{width:""}}
                    src={item.image} alt="" />
                    <h3> Product Title:{item.title}</h3>
                    <h3>Gender :{item.gender}</h3>
                    <h3>Product Price: {item.price}</h3>
                    <h3>Category : {item.category}</h3>
                    <button onClick={()=>(handleDelete(item.id))}>Delete</button>
               </div> 
            ))
        }
        </div>
    )
}
export default ProductList;