import { useEffect, useState } from "react";


const Search =()=>{

    const[val ,setval] = useState("")
    const[valdata ,setvaldata] = useState([])
    const [err ,seterr]=useState("")

    const [myallproducts, setmyallProducts] = useState([]);

    useEffect(() => {
        const storedProducts = localStorage.getItem('proItems');
        if (storedProducts) {
          setmyallProducts(JSON.parse(storedProducts));
        }
      }, []);
// console.log(myallproducts);

    const finddata=(e)=>{
      e.preventDefault();
         const filteredProducts = myallproducts.filter(product =>
            product.ProductName.toLowerCase().includes(val.toLowerCase())
          );

          if (filteredProducts.length<=0)
          {

            seterr("No Product Found")
          }
          else{
seterr("")
setvaldata(filteredProducts)
          }

    }
    const data = valdata.map((key,i) => {
        return(<>
   <tr className="tableContainerbox">
<td className="tableItems">{i+1}</td>
<td className="tableItems">{key.ProductName}</td>
<td className="tableItems" >{key.Price}</td></tr>
        </>)
   })

return(<>
<form className="Search_form" onSubmit={finddata}>
<div className="search">
<h1 className="searchInput" >Search Product by Name <br/> <input required onChange={(event) => setval(event.target.value)} className="" /><br/>
<button className="Search_button" type="submit">Search</button></h1>
</div>
</form>

<div className="DisplayBar">

<table className="displayTbale">
<tr className="tableContainer">
<th className="tableHeading">
  S.No
</th>
<th className="tableHeading">
    ProductName
</th>
<th className="tableHeading">
    ProductPrice
</th>
</tr>
{data}
</table>
<h1 className="serachError">{err}</h1>

</div>
</>)
}


export default Search;
