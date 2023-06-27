import { Accordion } from "components/Accordion/Accordion"
import { CheckRadio } from "components/CheckRadio/CheckRadio"
import { FilterItem as FI } from "class/ShopFilter"

export const FilterItem = ({ data }) => {
    const { values, title, expanded, name, type } = data
    const types = {
        [FI.T_CHECKBOX]: 'checkbox',
        [FI.T_RADIO]: 'radio'
    }

    const onClick = (v) => {
        data.select(v)
        console.log(data)
    }
    
    return (
      <Accordion title={ title } expanded={ expanded } className="item">
        {
            values.map((v, i) => {
                return <div className="filter-value" key = {i}>
                    <CheckRadio name={ name } type={ types[type] }  labelName = {v.title} onClick ={() => onClick(v)}/>
                </div>
            })
        }
      </Accordion>
    )
}
