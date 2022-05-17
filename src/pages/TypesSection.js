import Logo from '../components/Logo'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PotteryHolding from '../components/PotteryHolding'
import { useParams } from 'react-router-dom'

//gather pottery data and render to page based on type of pottery
const TypesSection = (props) => {
  let { types } = useParams()
  const [pottery, setPottery] = useState([])

  const getPottery = async () => {
    const response = await axios.get(
      `https://youandibe.herokuapp.com/types/${types}`
    )
    setPottery(response.data)
  }

  useEffect(() => {
    getPottery()
  }, [])

  //switch case to render depending on type
  switch (types) {
    case 'plate':
      return (
        <div>
          <Logo landingLogo={props.landingLogo} />
          <div className="container-grid">
            {pottery.map((pottery) => (
              <PotteryHolding
                id={pottery._id}
                image={pottery.image}
                name={pottery.name}
                types={pottery.types}
                price={pottery.price}
                description={pottery.description}
              />
            ))}
          </div>
        </div>
      )
    case 'mug':
      return (
        <div>
          <Logo landingLogo={props.landingLogo} />
          <div className="container-grid">
            {pottery.map((pottery) => (
              <PotteryHolding
                id={pottery._id}
                image={pottery.image}
                name={pottery.name}
                types={pottery.types}
                price={pottery.price}
                description={pottery.description}
              />
            ))}
          </div>
        </div>
      )
    case 'jewelry':
      return (
        <div>
          <Logo landingLogo={props.landingLogo} />
          <div className="container-grid">
            {pottery.map((pottery) => (
              <PotteryHolding
                id={pottery._id}
                image={pottery.image}
                name={pottery.name}
                types={pottery.types}
                price={pottery.price}
                description={pottery.description}
              />
            ))}
          </div>
        </div>
      )
    case 'bowl':
      return (
        <div>
          <Logo landingLogo={props.landingLogo} />
          <div className="container-grid">
            {pottery.map((pottery) => (
              <PotteryHolding
                id={pottery._id}
                image={pottery.image}
                name={pottery.name}
                types={pottery.types}
                price={pottery.price}
                description={pottery.description}
              />
            ))}
          </div>
        </div>
      )
    case 'vase':
      return (
        <div>
          <Logo landingLogo={props.landingLogo} />
          <div className="container-grid">
            {pottery.map((pottery) => (
              <PotteryHolding
                id={pottery._id}
                image={pottery.image}
                name={pottery.name}
                types={pottery.types}
                price={pottery.price}
                description={pottery.description}
              />
            ))}
          </div>
        </div>
      )
    case 'sculpture':
      return (
        <div>
          <Logo landingLogo={props.landingLogo} />
          <div className="container-grid">
            {pottery.map((pottery) => (
              <PotteryHolding
                id={pottery._id}
                image={pottery.image}
                name={pottery.name}
                types={pottery.types}
                price={pottery.price}
                description={pottery.description}
              />
            ))}
          </div>
        </div>
      )
    default:
      return <div>default</div>
  }
}

export default TypesSection
