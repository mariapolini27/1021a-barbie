import './Header.css'
import LinkNav from '../linknav/LinkNav'
function Header(){
    return(
        <header>
            <div>
            <div><img className='img-logo' src="src\assets\img\Barbie_Logo.svg.png" alt=""></img></div>
            </div>
            <nav>
                <ul>
                    <li>
                        <LinkNav url="/" texto='Home'/>
                    </li>
                    <li>
                        <LinkNav url="/noticias" texto='Notícias'/>
                    </li>
                    <li>
                        <LinkNav url="/sobre" texto='Sobre'/>
                    </li>
                    <li>
                        <LinkNav url="/contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header