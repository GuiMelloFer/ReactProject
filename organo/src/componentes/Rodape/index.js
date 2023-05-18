import RedeSocial from '../../RedeSocial'
import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='rodape'>
            <div className='redes-sociais'>
                <RedeSocial imagem='/imagens/ig.png'/>
                <RedeSocial imagem='/imagens/fb.png'/>
                <RedeSocial imagem='/imagens/tw.png'/>
            </div>

            <div className='logo'>
                
            </div>
        </footer>
    )
} 

export default Rodape