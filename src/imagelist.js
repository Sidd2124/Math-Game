import './App.css'

const ImageList = props => {
  const {Chennai, South} = props
  const {imageUrl, id} = Chennai

  const Change = () => {
    South(id)
  }

  return (
    <div>
      <img className="pic" src={imageUrl} onClick={Change} alt="p" />
    </div>
  )
}
export default ImageList
