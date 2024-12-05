import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/collapse.scss'
import { CollapseProps } from '../definitions/collapseProps'

const Collapse: React.FC<CollapseProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const bouttonCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={bouttonCollapse}>
        <h3>{title}</h3>

        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="icon"
        />
      </div>

      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  )
}

export default Collapse
