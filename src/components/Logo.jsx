//logo creation

const Logo = (props) => {
  return (
      <div className='logo-content'>
        <section className='image-container'>
          <img src={props.landingLogo} alt='You and I are Earth'/>
        </section>
      </div>
  )
}

export default Logo