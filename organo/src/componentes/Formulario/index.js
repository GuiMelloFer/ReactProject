import { useState } from 'react'
import Button from '../Button'
import ListaSuspensa from '../ListaSupensa'
import TextField from '../TextField'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('') //https://legacy.reactjs.org/docs/hooks-reference.html
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({nome,cargo,imagem,time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    

    return(
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}/>
                <TextField 
                    obrigatorio={true}
                     label="Cargo" 
                     placeholder="Digite seu cargo" 
                     valor={cargo} 
                     aoAlterado={valor => setCargo(valor)}/>
                <TextField 
                    label="Imagem"
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Formulario