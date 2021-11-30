import React, {useState} from 'react'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'
import { DataImages } from './DataImages'
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
        <div>
            
        <FaArrowAltCircleLeft onClick={prevSlide}/>
        <FaArrowAltCircleRight onClick={nextSlide}/>


        {DataImages.map((slide,index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'}>
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
