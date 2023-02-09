import React from 'react'
import Link from 'next/link';

function WdButton(props) {
  return (
    <button type={props.type} className={`wd__btn ${props.btnstyle}`} {...props}>
        {
            props.href ? (
                <Link href={props.href}>
                    <a className="wd__navbar__link">
                        {props.to}
                    </a>
                </Link>
            ) : (props.children)
        }
    </button>
  )
}

export default WdButton