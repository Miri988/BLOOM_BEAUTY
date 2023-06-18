import { Stars } from "components/Stars/Stars";
import { Button } from "components";

export const ItemCard = () => {
    
    return (
        <div className="item-card">
            <div className="square image">
                <div className="content">
                    <img src={require('assets/images/imgariv1.png')} alt = ""/>
                </div>
            </div>
            <div className="content">
                <div className="header">All-Around Safe Block Essence Sun SPF45+</div>
                <Stars/>
                <div className="description">All Around Safe Block Sun Milk SPF50+/PA+++</div>
                <span className="price">32$</span>
                <Button className="secondary fluid button">Add to Bag</Button>
            </div>
        </div>
    )
  }