import React from 'react'
import './AllStyles/Section.scss'
import ImageSlides from './ImageSlides'
import { DataImages } from './DataImages'
import Section2 from './Section2'

const Section = () => {
    return (
        <section className='allSection'>
            <ImageSlides slides={DataImages}/>
            <Section2/>
        </section>
    )
}

export default Section
