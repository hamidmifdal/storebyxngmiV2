import Card from "../../componets/asset/card/Card";

export default function Princing(props){
    return(
        <>
            <div className="container">
                <div className="d-flex justify-content-between mt-5">
                  <h1 className='text-start fs-3 font-monospace'>Article Princing</h1>
                  <button className='text-end btn btn-outline-warning' >Filter</button>
                </div>
            </div>
            <div className="container">
              <Card items={props.p}/>
            </div>
        </>
    )
}