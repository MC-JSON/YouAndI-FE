import Logo from '../components/Logo'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//form for creating new pottery into database
const Create = (props) => {
  const [formValue, setFormValue] = useState({
    name: '',
    types: '',
    description: '',
    price: '',
    image: ''
  })

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/types')
  }

  const { name, types, description, price, image } = formValue

  return (
    <div className="forms">
      <Logo landingLogo={props.landingLogo} />
      <section className="input-section">
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="types"
            placeholder="Type"
            value={types}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="price"
            placeholder="Price"
            value={price}
            onChange={handleChange}
          />
          <input
            className="form"
            type="text"
            name="image"
            placeholder="Image"
            value={image}
            onChange={handleChange}
          />
          <button
            onClick={async () =>
              await axios.post('http://localhost:3001/create', formValue)
            }
          >
            Create
          </button>
        </form>
      </section>
    </div>
  )
}

export default Create
