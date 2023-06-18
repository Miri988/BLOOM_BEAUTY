import { Button } from "components";

export const BlogCard = () => {
    
    return (
        <div className="blog-card">
            <div className="rectangle image">
                <div className="content">
                    <img src={require('assets/images/blogcard.png')} alt = ""/>
                </div>
            </div>
            <div className="content">
                <div className="header">Cracking the Coconut Code</div>
                <div className="description">Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams</div>
                <Button className="secondary fluid button">Read More</Button>
            </div>
        </div>
    )
  }