import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
        <div>
        <h5>App hecha con  ♥  por Francisco Béltran </h5>
        <div className='FooterR'>
       <a href="https://www.instagram.com/beltranbolibar/"target={'_blank'}>
       <img src="https://cdn-icons-png.flaticon.com/512/3670/3670125.png"  title='Ir a my Instagram' />
       </a>
       <a href="https://github.com/Francisco-Tirador"target={'_blank'}>
       <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" title='Ir a my GitHub' />
       </a>
       <a href="https://www.linkedin.com/in/francisco-beltr%C3%A1n-342a31213/" target={'_blank'}>
       <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"   title='Ir a my Linkedin'/>
       </a>
       <a href="https://francisco-beltran.netlify.app/" target={'_blank'}>
       <img src="https://cdn-icons-png.flaticon.com/512/3476/3476457.png" title='Ir a my portafolio'  />
       </a>

        </div>
        </div>
    </div>
  )
}

export default Footer