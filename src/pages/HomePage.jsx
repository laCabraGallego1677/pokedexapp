import FormTrainer from "../components/HomePage/FormTrainer"

const HomePage = () => {
  return (
    <div>
      <header>
        <div>
          <h2>Pokedex</h2>
          {/* <img src="./pokedex.png" alt="" /> */}
        </div>
      </header>
      <h2>Hi trainer!</h2>
      <p>To see the information of the Pokemon's tell me your trainer name</p>
      <FormTrainer/>
    </div>
  )
}

export default HomePage