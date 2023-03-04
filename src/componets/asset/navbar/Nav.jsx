import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  // const [data, setData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   // Fetch data from API
  //   fetch('http://127.0.0.1:5000/product')
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, [searchTerm]);

  // // Filter data based on search term
  // const filteredData = data.filter(item => {
  //   return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link className="navbar-brand text-warning fs-4 fst-italic" to="/">Chama.<span className='fs-6'>Store</span></Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto text-center">
              <li className="nav-item"><Link className="nav-link active me-5 text-light fw-bold" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link active me-5 text-light fw-bold" to="/totebag">Tote bag</Link></li>
              <li className="nav-item"><Link className="nav-link active me-5 text-light fw-bold" to="/princing">Pricing</Link></li>
            </ul>
            <ul className='navbar-nav'>
              <li className='nav-item fs-4 me-3'><input className='form-control' type="text" placeholder='Search...' 
              // onChange={(e) => setSearchTerm(e.target.value)} 
              /></li>
              <li className='nav-item fs-4 me-3'><i className="bi bi-instagram text-light"></i></li>
              <li className='nav-item fs-4 me-0'><i className="bi bi-facebook  text-light"></i></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
    </>
  );
}

export default Nav;
