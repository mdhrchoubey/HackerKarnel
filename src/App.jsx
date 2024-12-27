
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from './Landingpage'
import Home from './Home'
import DisplayProduct from './DisplayProduct';
import Addproduct from './Addproduct';
import Search from './search';
function App() {
  return (
    <>
<BrowserRouter>
<Routes >
<Route path="/" element={<Landingpage />}>
</Route>
<Route path="home" element={<Home/>}>
<Route index  element={<DisplayProduct />} />
<Route  path='DisplayProduct' element={<DisplayProduct />} />
<Route path='addproduct' element={<Addproduct />} />
<Route  path='Search' element={<Search />} />

</Route>


</Routes>

    </BrowserRouter>
    {/* <Abc /> */}
{/* <Landingpage /> */}

    </>
  )
}

export default App
