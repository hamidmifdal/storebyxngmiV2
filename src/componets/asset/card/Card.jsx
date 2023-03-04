import { Link } from 'react-router-dom'
const Card = (props) => {
  return (
    <>
        <div className="row row-colsß-2 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 g-4 mt-5 m-5">
            {props.items.map(item=>(
            <div className="col">
              <Link to='/product' state={item}>
                <div className="card" style={{"border":"none"}}>
                  <img src="https://i.pinimg.com/564x/d3/21/1d/d3211d835dc81e77d463f76a1c5a2500.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">{item.descr}</p>
                    <h5 className="card-title"> <span className='fs-6'>Prix:</span> {item.prix}</h5>
                  </div>
                </div>
              </Link>
          </div>
            ))}
          
        </div>
    </>
  )
}

export default Card