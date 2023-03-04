import { useEffect, useState } from 'react'
import Card  from '../../componets/asset/card/Card'


export default function Home(props) {

  const [category, setCategory] = useState('sweatshort');
  const filteredData = props.p.filter(item => item.category === category);

  return (
    <>
        <div className="container">
            <div className="d-flex justify-content-between mt-5">
              <h1 className='text-start fs-3 font-monospace'>Article Decor</h1>
              <button className='text-end btn btn-outline-warning ' >Filter</button>
            </div>
        </div>
        <div className="container">
          <Card items={filteredData} />
        </div>
    </>
  )
}
