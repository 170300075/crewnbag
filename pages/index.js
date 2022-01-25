import Button from "../components/Button";
import Counter from "../components/Counter";

function Home() {
  return (
    <div className="container mx-auto mt-10">
      <Button name="Contador" type = "up"/>
      <Button name="Contador" type = "down"/>
      <Counter/>
      <div className="mt-5">
        <p className="text-xs xs:text-xl">Esto es un ejemplo de texto</p>
      </div>
    </div>
  )
}

export default Home;