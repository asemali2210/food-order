import React from 'react'
import logoNavbar from 'public/assest/img/chef-hat-logo.png';
import Image from 'next/future/image'

function LogoWithName() {
  return (
    <div className='wd__logo-with-name d-flex align-items-center'>
      <Image 
          src={logoNavbar}
          layout='raw'
          width={20}
          height={20}
          className="'wd__logo-with-name__img"
          alt='wd'
      />
      <h1 className='wd__navbar__name'>
        WindDelivery
      </h1>
    </div>
  )
}

export default LogoWithName;