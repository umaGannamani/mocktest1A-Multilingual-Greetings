import './index.css'

const Language = props => {
  const {itemDetails} = props
  const {imageUrl, imageAltText} = itemDetails

  return (
    <li className='image'>
      <img src={imageUrl} alt={imageAltText} className='lang-img' />
    </li>
  )
}

export default Language
