import { Arrivals } from "containers/Arrivals/Arrivals";
import { Bestsellers } from "containers/Besrsellers/Bestsellers";
import { Blog } from "containers/Blog/Blog";
import { Insta } from "containers/Insta/Insta";
import { Kits } from "containers/Kits/Kits";
import { Quiz } from "containers/Quiz/Quiz";
import { UpperBanner } from "containers/UpperBanner/UpperBanner";

export const Main = () => {
  const kits1 = {
    header: 'Blossom Glow Kit',
    description: `Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams with lotus extract 
    provide deep hydration and rejuvenation. Suitable for all skin types. Vegan, cruelty-free, eco-friendly.`,
    image: require('assets/images/IMAGEkits.png'),
    labels: [
      'GreatGift',
      'AntiAging',
      'AllSkin',
      'Ingredients',
      'Ingredients'
    ],
    isReversed: false
  }
  const kits2 = {
    header: 'Floral Essence Masks Sets',
    description: `Indulge in the beauty of nature with our Floral Essence Masks set. Each mask features a unique blend of flower extracts to hydrate and nourish your skin. Experience the essence of flowers in your skincare routine.`,
    image: require('assets/images/IMAGEkits2.png'),
    labels: [
      'GreatGift',
      'AntiAging',
      'AllSkin',
      'Ingredients',
      'Ingredients'
    ],
    isReversed: true,
  }

  return (
    <div className = "main">
      <UpperBanner />
      <Arrivals/>
      <Bestsellers/>
      <div className = "kits">
        <Kits data={kits1} />
        <Kits data={kits2} />
      </div>
      <Blog/>
      <Quiz/>
      <Insta/>
    </div>
  )
}
