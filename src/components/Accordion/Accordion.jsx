import { useState } from "react";

export const Accordion = ({ className, title, children, expanded = false }) => {

    const [isExpanded, setExpanded] = useState(expanded)

    const toggle = () => {
        setExpanded(!isExpanded)
    }

    return (
      <div className={`accordion ${className} ${isExpanded ? 'expanded' : ''}`}>
        <div className="title">
            {title} <i className="icofont-rounded-right link icon" onClick={toggle}></i>
        </div>
        <div className="content">
            {children}
        </div>
      </div>
    )
}
