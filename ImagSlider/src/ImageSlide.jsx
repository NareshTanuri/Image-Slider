import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const ImageSliderExample = () => {
    const SliderData = [
        {
            image:
                'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            image:
                'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
        },
        {
            image:
                'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
            image:
                'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
        },
        {
            image:
                'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        }
    ];

    const [slide, setSlide] = useState(0);
    const NextSlider = () => {
        setSlide(slide === SliderData.length - 1 ? 0 : slide + 1);
    }

    const PrevSlider = () => {
        setSlide(slide === 0 ? SliderData.length - 1 : slide - 1);
    }
    return (
        <div className="text-center">
            <h1>Image Slider {slide}</h1>
            <button className="btn btn-danger" onClick={PrevSlider} style={{ marginRight: "20px" }}>Pre-Image</button>
            {
                SliderData.map((item, index) => {
                    return (
                        <>
                            {
                                slide === index && (<img src={item.image} height={300} width={500} />)
                            }
                        </>
                    )
                })
            }
            <button className="btn btn-success" onClick={NextSlider} style={{ marginLeft: "20px" }}>Next-Image</button>
        </div>
    )
}
export default ImageSliderExample;