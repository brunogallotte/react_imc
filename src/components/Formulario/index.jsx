import { useState } from "react";
import styles from "./Form.module.css";

const Formulario = (props) => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const renderizaResultado = (peso, altura) => {
        const alturaQuadrada = altura ** 2;
        const resultado = peso / alturaQuadrada;

        return resultado.toFixed(1)
    }

    const classificaImc = () => {
        
        const resultadoImc = renderizaResultado(peso, altura);
        console.log(resultadoImc);
        
        if (resultadoImc <= 16.9) {
            return 'Encontra-se muito abaixo do peso!';
        } else if (resultadoImc <= 18.4) {
            return 'Você está abaixo do peso';
        } else if (resultadoImc <= 24.9) {
            return 'O seu peso está normal!';
        } else if (resultadoImc <= 29.9) {
            return 'Você está com sobrepeso!';
        } else if (resultadoImc <= 34.9) {
            return 'Você tem obesidade grau 1';
        } else if (resultadoImc <= 39.9) {
            return 'Você tem obesidade grau 2';
        } else {
            return 'Você tem obesidade grau 3';
        }

    }

    return(
        <>
            <header>
                <h1>Calculadora IMC</h1>
            </header>

            <form className={styles.formControl}>
                <input className={styles.input} type="number" placeholder="Peso" onChange={evento=> setPeso(parseFloat(evento.target.value))}/>
                <input className={styles.input} type="number" placeholder="Altura" onChange={evento=> setAltura(parseFloat(evento.target.value))}/>
            </form>

            <p>O paciente possui o IMC: {renderizaResultado(peso, altura)}</p>
            <p className={styles.resultado}>{classificaImc()}</p>
        </>
    )

}

export default Formulario