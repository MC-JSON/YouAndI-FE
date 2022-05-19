import Logo from '../components/Logo'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TypesRend from '../components/TypesRend'

//built for pottery types listing
const Types = (props) => {
  const [types, setTypes] = useState([])

  //retrieves types from database and sets them
  const getTypes = async () => {
    const response = await axios.get('https://youandibe.herokuapp.com/types')
    setTypes(response.data.types)
  }

  useEffect(() => {
    getTypes()
  }, [])

  const navigate = useNavigate()

  //navigate types
  const navTypes = (types) => {
    navigate(`/types/${types}`)
  }

  //render types
  return (
    <div>
      <Logo landingLogo={props.landingLogo} />
      <section className="container-grid container-grid2">
        {types.map((types) => (
          <div>
            <TypesRend
              typesName={`${types.typesName}`}
              onclick={() => navTypes(types.typesName)}
              image={types.image}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Types
