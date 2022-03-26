
function Card(props) { 
  console.log(props);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.imgUrl ? props.imgUrl : "https://c8.alamy.com/zooms/9/dd8a705bdfd1473ca8f2947c307119dd/2bnmt8t.jpg"} className="card-img-top" alt="#" />
      <div className="card-body">
        <h5 className="card-title">{props.title} за {props.price}$</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">Подробнее</a>
      </div>
    </div>
  )
}


export default Card;