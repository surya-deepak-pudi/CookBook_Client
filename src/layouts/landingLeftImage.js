import "../pages/landing"

//Component: this is used in the landing page to provide a grid with image on the left and description on right.
//input: image source file as image and the description to be added on the right as description.

const scrollUp = () => {
  window.scrollBy(0, -document.documentElement.scrollHeight / 4)
}
const scrollDown = () => {
  window.scrollBy(0, document.documentElement.scrollHeight / 4)
}
const LandingLeftImage = ({ image, description }) => {
  return (
    <div className="landing__brief--left">
      <img src={image} alt="portrait" className="landing__brief__image" />
      <div className="landing__brief__description">
        <div
          className="button__previous"
          onClick={() => {
            scrollUp()
          }}
        ></div>
        <div className="landing__brief__line--up"></div>
        {description()}
        <div className="landing__brief__line--down"></div>
        <div className="button__next__wrap">
          <div
            className="button__next"
            onClick={() => {
              scrollDown()
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default LandingLeftImage
