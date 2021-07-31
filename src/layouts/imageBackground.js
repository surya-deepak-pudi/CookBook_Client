import "./imageBackground.scss"

const ImageBackground = ({ image }) => {
  console.log(image)
  return (
    <img src={image} className="bg__image" alt="background not loaded"></img>
  )
}

export default ImageBackground
