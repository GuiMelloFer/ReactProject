import './Button.css'

const Button = (props) => {
    return(
        
        <button type='submit' className='button'>
            {props.children} 
        </button>
        //children recebe tudo que for passado dentro da tag na chamada
        
    )
}

export default Button