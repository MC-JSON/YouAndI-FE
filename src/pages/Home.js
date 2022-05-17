import Logo from '../components/Logo'

//home page build
const Home = (props) => {
  return (
    <div>
      <Logo landingLogo={props.landingLogo} />
    </div>
  )
}

export default Home
