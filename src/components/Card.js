import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import './Card.css'

function Card({ item }) {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    return (
        <>
            <div className='card-prim'>
                <div className=' card_container'>

                    <article className='card_item' >
                        <div className='card_item-image'>

                            <img src={item.image} alt={item.title} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.para}</p>
                        <p {...getCollapseProps()}>{item.show} 🙈</p>
                        <div className='card_item-cta'>
                            <a href='' className='btn'
                                {...getToggleProps({
                                    onClick: (e) => setExpanded((prevExpanded) => !prevExpanded, e.preventDefault()),

                                })}
                            >{isExpanded ? 'Read Less' : 'Read More'}</a>

                        </div>
                    </article>
                    <div className='cart'></div>

                </div>

            </div>
        </>
    )
}

export default Card
