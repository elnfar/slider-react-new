import React from 'react'
import './AllStyles/Section.scss'
import ImageSlides from './ImageSlides'
import { DataImages } from './DataImages'

const Section = () => {
    return (
        <section className='allSection'>
            <ImageSlides slides={DataImages}/>
        </section>
    )
}

export default Section
