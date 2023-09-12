import Filme from './../Filme/Filme'
import './Main.css'
export default function Main(){
  let textodigitado = 'Barbie'
    function TrataTexto(){
        console.log("Digitado")
        textodigitado = "TERE"
    }
    return(
             <>
            <div className="campo_pesquisa">
                <p> Busque um filme</p>
                <input type="text" className='botao_pesquisa' placeholder='Pesquise um Filme' onChange={TrataTexto} />
                <p>Digitado: {textodigitado} </p>
            </div>

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
        </>
    )
}