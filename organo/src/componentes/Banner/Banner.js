import './Banner.css'

export const  Banner = () => {
    //JSX - como o react trabalha com a parte visual. Não é HTML, o react entende e transforma emelemento no DOM 
    return (
        <header className="banner">
             <img src="/imagens/banner.png" alt="Banner principal da Organo"/>
        </header>
       
    )
}
