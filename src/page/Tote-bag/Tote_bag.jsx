import { useState } from "react";
import Card from "../../componets/asset/card/Card";

export default function Tote_bag(props){
    const [category , setCategory] = useState('totebag')
    const filteredData = props.p.filter(items => items.category === category)
    return(
        <>
            <div className="container">
                <div className="d-flex justify-content-between mt-5">
                  <h1 className='text-start fs-3 font-monospace'>Article Tote bag</h1>
                  <button className='text-end btn btn-outline-warning' >Filter</button>
                </div>
            </div>
            <div className="container">
              <Card items={filteredData} />
            </div>
        </>
    )
}