import { Link, Outlet, useNavigate } from "react-router-dom"

const Home=()=>{


    let nav=useNavigate()

    const Logout=()=>{
        
  localStorage.clear()
  nav("/")
    }
return(
    <>
<div className="Menu_bar">
    <ul className="Menu_items">
    <li className=""> <Link to="DisplayProduct" >Display Product</Link></li>
    <li className=""> <Link to="addproduct"> Addproduct</Link></li>
    <li className=""> <Link to="search">  Search</Link></li>
    </ul>
    <button className="LogOut-button"  onClick={Logout}>Logout </button>
    </div>



    <div className=""><Outlet /></div>
    
    </>
)
}

export default Home;