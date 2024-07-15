import './index.css'

const ButtonText = props => {
  const {eachButton, clickTabItem, isActive} = props
  const {buttonText, id} = eachButton

  const onClickButton = () => {
    clickTabItem(id)
  }

  const colorCode = isActive ? 'color' : ''

  return (
    <li className="buttons-list">
      <button
        type="button"
        onClick={onClickButton}
        className={`tab-btn ${colorCode}`}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonText
