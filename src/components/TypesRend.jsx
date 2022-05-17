//built for pottery type listings
const TypesRend = (props) => {

  return (
    <div className="card" onClick={props.onclick}>
    <div className="img-wrapper">
      <img src={props.image} alt="types" />
    </div>
    <div className="info-wrapper flex-col">
      <h3>{props.typesName}</h3>
    </div>
    </div>
  )
}

export default TypesRend