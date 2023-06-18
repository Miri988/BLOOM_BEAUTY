import { useState } from "react"

export const Slider = (props) => {
    const { children, size } = props
    const [index, setIndex] = useState(0)
    const [shift, setShift] = useState(0)
    const slides = Array(Math.ceil(children.length / (size ?? 1))).fill().map((_v, i) => {
        return <div className="slide" key={i}>
            {children.slice(i, i + size)}
        </div>
    })

    const setItem = (v) => {
        let r = v
        if (v >= slides.length) {
            r = 0
        } else if (v < 0) {
            r = slides.length - 1
        }
        setIndex(r)
        setShift(100 * -1 * r)
    }

    return (
        <div className="slider">
            <div className="content">
                <div className="slides" style={{marginLeft: `${shift}%`}}>
                    {slides}
                </div>
            </div>
            <div className="dots">
                {Array(slides.length).fill().map((_v, i) => <div className={`dot ${i === index ? 'active' : ''}`} key={i} onClick={() => setItem(i)}></div>)}
            </div>
            <i className="icofont-rounded-left icon" onClick={() => setItem(index - 1)}></i>
            <i className="icofont-rounded-right icon" onClick={() => setItem(index + 1)}></i>
        </div>
    )
  }