import "./App.scss"

import Route from "./components/router/Route"

import Landing from "./pages/landing"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/home"
import RecipeList from "./pages/recipeList.js"
import RecipeRead from "./pages/recipeRead"
import RecipeCreate from "./pages/recipeCreate"
import RecipeUpdate from "./pages/recipeUpdate"
import RecipeVersion from "./pages/recipeVersion"
import Pantry from "./pages/Pantry"

function App() {
  return (
    <div className="app">
      <div>
        <Route path="/">
          <Landing></Landing>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/pantry">
          <Pantry></Pantry>
        </Route>
        <Route path="/recipes">
          <RecipeList></RecipeList>
        </Route>
        <Route path="/recipes/new">
          <RecipeCreate></RecipeCreate>
        </Route>
        <Route path="/recipes/:id">
          <RecipeRead></RecipeRead>
        </Route>
        <Route path="/recipes/:id/update">
          <RecipeUpdate></RecipeUpdate>
        </Route>
        <Route path="/recipes/:id/version">
          <RecipeVersion></RecipeVersion>
        </Route>
      </div>
    </div>
  )
}

export default App
