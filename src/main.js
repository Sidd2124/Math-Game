const MainImag = props => {
  const {thumbnail} = props
  const {thumbnailUrl} = thumbnail

  return (
    <div>
      <img alt="sd" src={thumbnailUrl} />
    </div>
  )
}
export default MainImag
