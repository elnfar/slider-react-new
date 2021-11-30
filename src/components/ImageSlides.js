import React, {useState} from 'react'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'
import { DataImages } from './DataImages'
import './AllStyles/Data.scss'



const ImageSlides = ({slides}) => {


    const [current, setCurrent] = useState(0)
    const length = slides.length

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }


    return (
        <div className='allSlide'>
            
        <FaArrowAltCircleLeft onClick={prevSlide} className='left'/>
        <FaArrowAltCircleRight onClick={nextSlide} className='right'/>


        {DataImages.map((slide,index) => {
            return (
                <div>
                    {index === current && (
                        <img src={slide.image}/>
                    )}
                </div>
            )
        })}





        </div>
    )
}

export default ImageSlides
