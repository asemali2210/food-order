import React from 'react';
import {ImLinkedin2} from 'react-icons/im';
import {BsMessenger} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';
import {SiTwoo} from 'react-icons/si';
import Link from 'next/link';
function SocialIcons() {
  return (
    <div className='wd__social-icons d-flex align-items-center '>
        <Link href='/'>
          <a>
            <ImLinkedin2 className='social_icon' />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <BsMessenger className='social_icon' />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <SiTwoo className='social_icon' />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <FaTwitter className='social_icon' />
          </a>
        </Link>
    </div>
  )
}

export default SocialIcons