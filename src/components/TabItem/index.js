// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onBtnClick, activeId} = props
  const {tabId, displayText} = tabDetails
  const OnButtonClicked = () => {
    onBtnClick(tabId)
  }
  return (
    <li className="buttonStyle">
      <button
        className={`color ${activeId === tabId ? 'active' : ''}`}
        type="button"
        onClick={OnButtonClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
