export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Join Us</h2>
          <p>
          “One person can make a difference, and everyone should try.”
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <a href={d.link}><i className={d.icon}></i></a>
                  <div className='service-desc'>
                    <a href={d.link}><h3>{d.name}</h3></a>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
