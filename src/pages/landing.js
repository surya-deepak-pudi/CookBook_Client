import { Fragment } from "react"
//layouts
import LandingLeftGrid from "../layouts/landingLeftImage"
import LandingRightGrid from "../layouts/landingRightImage"
//components
import LinkButton from "../components/buttons/linkButtons"
//assets
import introImage from "../assets/intro_portrait.jpg"
import recipeImage from "../assets/recipe_portrait.jpg"
import pantryImage from "../assets/pantry_portrait.jpg"
import cookingImage from "../assets/cooking_portrait.jpg"
//styling
import "./landing.scss"

//descritpion components which displays data in layouts
//a change can be made to read a text file

const IntroDescription = () => {
  return (
    <Fragment>
      <h1>Cook Book</h1>
      <p className="landing__brief__para">
        Forgot your recipe??
        <br />
        Can't remember the original procedure after lots of changes?
        <br />
        Wanna share your secret to your friend?
        <br />
        Are your pantry items expiring?
        <br />
        Just leave it to us...
      </p>
      <LinkButton href="/login" purpose="login">
        Login
      </LinkButton>
      <LinkButton href="/register" purpose="register">
        Regsiter
      </LinkButton>
    </Fragment>
  )
}

const RecipeDescription = () => {
  return (
    <Fragment>
      <h2>Wanna track your cooking?</h2>
      <p className="landing__brief__para">
        This might have happened to lot of us...
        <br></br>
        We make changes to the recipe and we forget the original or we loose
        track of what we did last time. No worries now we have version control
        which provides a history of changes you have made. Ingrediants,
        quantities everything in your hands.
        <br /> Wanna add reference videos or link... we covered 'em too..
        <br /> Want to help a friend in need.. share them your work in seconds
        with easy word export..<br></br> Well, we got everything in your finger
        tips... Let's cook &#128523;
      </p>
    </Fragment>
  )
}

const PantryDescription = () => {
  return (
    <Fragment>
      <h2>Pantry... in control</h2>
      <p className="landing__brief__para">
        Pantry a tough enemy... more items, more mess. Wanna keep everything
        organised, don't wanna waste any items?
        <br />
        Have a list of all the things in your kitchen with quantites.
        <br />
        Organize the items by cuisine, usage, price, expiry.
        <br />
        Sort them filter them as per your needs.
        <br />
        Get notified when your items are expiring. Perishables are consumed on
        time now.
        <br></br>
        Get smart suggestions to cook for each item from your recipe book.
        <br />
        Oh no... out of something.. mark them completed, add instantly to your
        shopping list....
        <br />
        Keep track of your pantry... stay organised... stay in control...
      </p>
    </Fragment>
  )
}

const CookingDescription = () => {
  return (
    <Fragment>
      <h2>It's made for you...</h2>
      <p className="landing__brief__para">
        You are home maker and cooking is your passion... it's for you.
        <br />
        You are proffesional chef and maintain your restraunt... it's for you.
        <br />
        You are an aspiring chef budding to be a professional and wanna make
        notes... it's for you.
        <br />
        You are a clumsy and wanna keep track of everything... it's for you.
        <br />
        Food scientists... you're welcome &#128521;
        <br />
        And all the 'Monicas' this is especially for you..
      </p>
    </Fragment>
  )
}

//page comonent to send data requires landing grids
const LandingPage = () => {
  return (
    <div className="landing">
      <LandingRightGrid image={introImage} description={IntroDescription} />
      <LandingLeftGrid image={recipeImage} description={RecipeDescription} />
      <LandingRightGrid image={pantryImage} description={PantryDescription} />
      <LandingLeftGrid image={cookingImage} description={CookingDescription} />
    </div>
  )
}

export default LandingPage
