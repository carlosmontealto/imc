import { useState } from 'react'
import { Form, GlobalCss } from './styles'
function App() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)

  const renderizaResultado = () => {
    const alturaQuadrado = altura * altura
    const IMC = peso / alturaQuadrado
    const IMCFixed = parseFloat(IMC.toFixed(2))

    if (IMCFixed > 0 && IMCFixed <= 100) {
      if (IMCFixed < 18.5) {
        return `Seu IMC é de: ${IMCFixed}. Você está na categoria abaixo do peso ideal.`
      } else if (IMCFixed >= 18.5 && IMCFixed < 24.9) {
        return `Seu IMC é de: ${IMCFixed}. Você está na categoria peso ideal.`
      } else if (IMCFixed >= 25 && IMCFixed < 29.9) {
        return `Seu IMC é de: ${IMCFixed}. Você está na categoria levemente acima do peso ideal.`
      } else if (IMCFixed >= 30 && IMCFixed < 34.9) {
        return `Seu IMC é de: ${IMCFixed}. Você está na categoria obesidade grau I.`
      } else if (IMCFixed >= 35 && IMCFixed < 39.9) {
        return `Seu IMC é de: ${IMCFixed}. Você está na categoria obesidade grau II (severa).`
      } else if (IMCFixed >= 39.9) {
        return `Seu IMC é de: ${IMCFixed}. Você está na categoria obesidade grau III (Mórbida).`
      } else {
        return ''
      }
    } else {
      return 'Por favor digite seu Peso e sua Altura'
    }
  }
  return (
    <>
      <GlobalCss />
      <Form className="container">
        <div>
          <label>Peso</label>
          <input
            onChange={(e) => setPeso(parseFloat(e.target.value))}
            id="peso"
            type="text"
          />
        </div>
        <div>
          <label>Altura</label>
          <input
            onChange={(e) => setAltura(parseFloat(e.target.value))}
            id="altura"
            type="text"
          />
        </div>
        <p>{renderizaResultado()}</p>
      </Form>
    </>
  )
}

export default App
