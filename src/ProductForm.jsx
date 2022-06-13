import React from "react";  

function ProductForm({getData})
{
    const[formData,setFormData]=React.useState({
        title:"",
        gender:"",
        price:"",
        category:"",
        image:"",
    })
    const handleChange=(e)=>
    {
        let{name,value}=e.target;

        setFormData({...formData,[name]:value})
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(formData);
        fetch(`http://localhost:3001/products`,
        {
            method:"POST",
            body:JSON.stringify(formData),
            headers:{"Content-type":"Application/json"}
        })
        getData();
        setFormData({
        title:"",
        gender:"",
        price:"",
        category:"",
        image:"",
       })
    }
    const{title,gender,price,category,image}=formData;

    return (
        <>
        <form onSubmit={handleSubmit} style={{
                    textAlign:"center"
                }}>

                <label htmlFor="title">Title: </label>
                <input 
                type="text"
                name="title"
                value={title} 
                onChange={handleChange}
                style={{
                   
                }} />
                <br />
                <label htmlFor="gender">Department: </label>
                <select 
                name="gender"
                value={gender}
                onChange={handleChange}
                style={{
                   
                }} >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
                <br />
                <label htmlFor="">Price</label>
                <input 
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
                style={{
                   
                }} />
                <br />
                <label htmlFor="category">Category: </label>
                <input 
                type="text"
                name="category"
                value={category}
                onChange={handleChange}
                style={{
                }} />
                <br />
                <label htmlFor="image">Image URL</label>
                <input 
                type="text"
                name="image"
                value={image}
                onChange={handleChange}
                style={{
                    
                }} />
                <br />
                <input type="submit" 
                style={{
                }}/>
            </form>
        </>
    );
}

export default ProductForm;