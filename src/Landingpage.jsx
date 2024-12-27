import { useState } from "react";

  import axios from "axios";
import { useNavigate } from "react-router-dom";
  
  const Landingpage=()=>{

    const nav=useNavigate()
    const [mydata,setMydata]=useState({
        email:"",
        password:""
    })
const setvalue=(e)=>{
const { name, value } = e.target;
    setMydata({
      ...mydata,
      [name]: value
    });
    console.log(mydata);
}
const Loginuser =async(e)=>{
  e.preventDefault();
  
    try {
        await axios.post("https://reqres.in/api/login",mydata)
        .then(res =>{
        console.log(res.data)
        let token=res.data.token
        localStorage.setItem('token', token)
        nav("home")
        mydata({
        email:"",
        password:""
        })

    }
    )
    }
     catch (error) {
        console.error(error);
        alert(error.response.data.error)
      
    }
}

return(<>

<div className="LoginPage">
<div className="LoginPage_container">
<form className="Login_input" onSubmit={Loginuser}  >
    <div className="Login_email">
      <label className="Email" >
        Email<br/>
      </label><br/>
      <input className="Input-email" required id="username" type="text" placeholder="email" name="email" value={mydata.email} onChange={setvalue}/>
    </div>
    <div className="mb-6">
      <label className="Password" >
        Password<br/>
      </label><br/>
      <input required className="input-password" id="password" type="password" placeholder="password" name="password" value={mydata.password} onChange={setvalue}/>
    </div>
    <button className="Login_button" type="submit"  >
        Login
      </button>
    </form>
</div>

</div>

</>)
  }

  export default Landingpage;