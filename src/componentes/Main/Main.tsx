import{ useState} from 'react'
import Filme from './../Filme/Filme'
import './Main.css'
type FilmeType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Main(){

  //let textodigitado = 'Barbie'
  const [texto,setTexto]=useState("")
  const filmes :FilmeType[] = [   
    {
        id:1,
        titulo:'Barbie',
        sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
        imagem:'/barbie.png'
    },
    { 
        id:2,
        titulo:  'Ken',
        sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
        imagem:'/Ken.png'
    },
    {
        id:3,
        titulo:  'Ken e Barbie',
        sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
        imagem:'KeneBarbie.webp'

    }
  ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
       
       // console.log(e.target.value)
       setTexto(e.target.value)
        
    }
    return(
             <>
            <div className="campo_pesquisa">
                <p> Busque um filme</p>
                <input type="text" className='botao_pesquisa' placeholder='Pesquise um Filme' onChange={TrataTexto} />
                {!texto && <p>Resultados Para:{texto} </p> }

{}             
            </div>

        <main className="content-main">
                {/* 
                    Use algo do vetor para tentar criar os filmes 
                */}
                {
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                sinopse={filme.sinopse}
                                titulo={filme.titulo}
                                imagem={filme.imagem}
                            />
                    )
                }

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