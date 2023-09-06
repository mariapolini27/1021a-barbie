import Filme from './../Filme/Filme'
import './Main.css'
export default function Main(){
    return(
        <main className="content-main">
            <Filme titulo= 'Barbie'
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/barbie.png'
            />
            <Filme titulo=  'Ken'
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/Ken.png'
            />
               <Filme titulo=  'Ken e Barbie'
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='KeneBarbie.webp'
            />
        </main>
    )
}