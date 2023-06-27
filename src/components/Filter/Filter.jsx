import { Button } from "components"
import { FilterItem } from "./FilterItem"

export const Filter = ({ data }) => {
    const { items } = data
    return (
      <div className="filter">
        {
            items.map((v, i) => <FilterItem data={ v } key={ i } />)
        }
        <Button className="secondary fluid button">Apply</Button>
      </div>
      
    )
}
