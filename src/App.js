import {Nav , Footer , Home , Tote_bag , Princing , Product} from './componets/index'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { useState , useEffect } from 'react'
import axios from 'axios'
export default function App(){
  const [post,setpost] = useState([])
  function getData(){
    axios.get('http://127.0.0.1:5000/product')
    .then(res => {setpost(res.data)})
  }
  useEffect(()=>{
    getData()
  }
  ,[])
    return(
        <>
          <BrowserRouter>
              <Nav/>
              <Routes>
                <Route path='/'         element={<Home     p={post} />} />
                <Route path='/totebag'  element={<Tote_bag p={post} />} />
                <Route path='/princing' element={<Princing p={post} />} />
                <Route path='/product'  element={<Product />} />
                <Route path='/*'        element={<h1>... page not found!</h1>} />
              </Routes>
              <Footer/>
          </BrowserRouter>
        </>
    )
}