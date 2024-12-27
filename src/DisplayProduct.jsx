import { useEffect, useState } from "react";

const DisplayProduct=()=>{
    const [ProductList, setProductList] = useState([]);
    useEffect(() => {
        const storedProducts = localStorage.getItem('proItems');
        if (storedProducts) {
          setProductList(JSON.parse(storedProducts));
        }
      }, []);

     let data = ProductList.map((key,i) => {
     return(<>
<tr className="tableContainerbox">
<td className="tableItems">{i+1}</td>
<td className="tableItems">{key.ProductName}</td>
<td className="tableItems" >{key.Price}</td></tr>
     </>)
     
      })


return(<>
<div className="DisplayBar">
<table className="displayTbale">
<tr className="tableContainer">
<th className="tableHeading" >
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
</div>
</>)
}

export default DisplayProduct;