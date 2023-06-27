import { useParams } from 'react-router-dom';
import { Stars } from 'components/Stars/Stars';
import styles from "./ProductCard.module.scss"
import { Button } from 'components';
import { Accordion } from 'components/Accordion/Accordion';
import { Slider } from 'containers/Slider/Slider';
import { useState } from 'react';

export const ProductCard = () => {

  const [activeImage, setActiveImage] = useState(0)

  const images = [
    's1.png',
    's2.png',
    's3.png',
    's4.png',
    's5.png'
  ]

  const { productId } = useParams()

  return (
    <div className={styles.main}>
      <div className="product">
        <div className="preview">
          <Slider size={1} className="basic" initial={activeImage} onChange={(v) => setActiveImage(v)}>
            {
              images.map((v, i) => <img src={`/images/${v}`} alt="img" key={i} />)
            }
          </Slider>
          <div className="images">
            {
              images.map((v, i) => {
                return <div className={`square image ${i === activeImage ? 'active' : ''}`} key={i} onClick={() => setActiveImage(i)}>
                  <div className="content">
                    <img src={`/images/${v}`} alt="img" />
                  </div>
                </div>
              })
            }
          </div>
        </div>
        <div className="info">
          <div className="header">Dewy Glow Jelly Cream</div>
          <Stars/>
          <div className="price">26$</div>
          <div className="description">A gel moisturizer packed with glow-boosting Cherry Blossom Extracts, visibly brightening niacinamide, and hydrating betaine from sugar beets. Advanced with glycerin and Cherry Blossom flavanoids with visibly soothing and moisturizing benefits for skin that’s ready for makeup! Dermatologist tested.</div>
          <div className="size">Size: 50 ml</div>
          <Button>Add To Card</Button>
          <Accordion title = "WHAT MAKES IT GOOD">A clear, water-jelly cream with Cherry Blossom and Niacinamide that delivers a burst of hydration and glow for visibly brighter, dewy skin. Key Ingredients Cherry Blossom Flavonoids: visibly soothing Niacinamide: visibly brightening Sugar Beet Betaine: hydrating</Accordion>
          <Accordion title = "INGREDIENTS">A clear, water-jelly cream with Cherry Blossom and Niacinamide that delivers a burst of hydration and glow for visibly brighter, dewy skin. Key Ingredients Cherry Blossom Flavonoids: visibly soothing Niacinamide: visibly brightening Sugar Beet Betaine: hydrating</Accordion>
          <Accordion title = "HOW TO USE">A clear, water-jelly cream with Cherry Blossom and Niacinamide that delivers a burst of hydration and glow for visibly brighter, dewy skin. Key Ingredients Cherry Blossom Flavonoids: visibly soothing Niacinamide: visibly brightening Sugar Beet Betaine: hydrating</Accordion>
        </div>
      </div>
      
    </div>
  )
}
