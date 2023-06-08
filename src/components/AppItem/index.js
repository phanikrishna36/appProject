// Write your code here
import './index.css'

const AppItem = props => {
  const {itemDetails} = props
  const {appName, imageUrl} = itemDetails

  return (
    <li className="appBox">
      <img className="imgHeight" alt={appName} src={imageUrl} />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
