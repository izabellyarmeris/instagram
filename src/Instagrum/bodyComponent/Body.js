import './body.css'

import Logo from '../img/instaLogo.png'
import { BiHeart } from 'react-icons/bi'
import { BiMessageRoundedCheck } from 'react-icons/bi'
import { BiFolderPlus } from 'react-icons/bi'
import { BiSolidHomeCircle } from 'react-icons/bi'
import { BiSearch } from 'react-icons/bi'
import { BiCompass } from 'react-icons/bi'
import { BiVideoPlus } from 'react-icons/bi'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { RiSettings3Fill } from 'react-icons/ri'
import { RiChat1Line } from 'react-icons/ri'
import { TbLocationShare } from 'react-icons/tb'
import Kirb from '../img/kirb.jpg'


const Body = () => {
    return (
        <div className="conteudo">

            <nav>
                <img src={Logo} alt="" />

                <ul>
                    <li><a className="primeiro"><BiSolidHomeCircle /> Página inicial</a></li>
                    <li><a><BiSearch /> Pesquisa</a></li>
                    <li><a><BiCompass /> Explorar</a></li>
                    <li><a><BiVideoPlus /> Reels</a></li>
                    <li><a><BiMessageRoundedCheck /> Mensagens</a></li>
                    <li><a><BiHeart /> Notificações</a></li>
                    <li><a><BiFolderPlus /> Criar</a></li>
                    <li><a>Perfil</a></li>
                </ul>

                <span><RiSettings3Fill /> Mais</span>



            </nav>

            <main>

                <header>
                    <ul>
                        <li><img src={Kirb} alt="" /></li>
                        <li><img src={Kirb} alt="" /></li>
                        <li><img src={Kirb} alt="" /></li>
                        <li><img src={Kirb} alt="" /></li>
                        <li><img src={Kirb} alt="" /></li>
                        <li><img src={Kirb} alt="" /></li>
                        <li><img src={Kirb} alt="" /></li>
                        <li><img src={Kirb} alt="" /></li>
                    </ul>

                </header>
                <section className="conteudoPost">

                    <div className="card">
                        <div className="cardCima">
                            <div className="esquerda">
                                <img src={Kirb} alt=""/>
                                <p>Kirb</p>
                                <span><BsDot/> 18 min</span>
                            </div>
                            <div className="direita"><p><BiDotsHorizontalRounded /></p></div>
                        </div>

                        <img src={Kirb} alt=""/>
                        <div className="cardBaixo">
                            <div className="esquerda">
                                <p><BiHeart/></p>
                                <p><RiChat1Line/></p>
                                <p><TbLocationShare/></p>
                            </div>
                            <div className="direita">
                                <p><BsBookmark/></p>
                            </div>
                        </div>


                    </div>

                    <div className="card">
                        <div className="cardCima">
                            <div className="esquerda">
                                <img src={Kirb} alt=""/>
                                <p>Kirb</p>
                                <span><BsDot/> 18 min</span>
                            </div>
                            <div className="direita"><p><BiDotsHorizontalRounded /></p></div>
                        </div>

                        <img src={Kirb} alt=""/>
                        <div className="cardBaixo">
                            <div className="esquerda">
                                <p><BiHeart/></p>
                                <p><RiChat1Line/></p>
                                <p><TbLocationShare/></p>
                            </div>
                            <div className="direita">
                                <p><BsBookmark/></p>
                            </div>
                        </div>


                    </div>

                    <div className="card">
                        <div className="cardCima">
                            <div className="esquerda">
                                <img src={Kirb} alt=""/>
                                <p>Kirb</p>
                                <span><BsDot/> 18 min</span>
                            </div>
                            <div className="direita"><p><BiDotsHorizontalRounded /></p></div>
                        </div>

                        <img src={Kirb} alt=""/>
                        <div className="cardBaixo">
                            <div className="esquerda">
                                <p><BiHeart/></p>
                                <p><RiChat1Line/></p>
                                <p><TbLocationShare/></p>
                            </div>
                            <div className="direita">
                                <p><BsBookmark/></p>
                            </div>
                        </div>


                    </div>

                    <div className="card">
                        <div className="cardCima">
                            <div className="esquerda">
                                <img src={Kirb} alt=""/>
                                <p>Kirb</p>
                                <span><BsDot/> 18 min</span>
                            </div>
                            <div className="direita"><p><BiDotsHorizontalRounded /></p></div>
                        </div>

                        <img src={Kirb} alt=""/>
                        <div className="cardBaixo">
                            <div className="esquerda">
                                <p><BiHeart/></p>
                                <p><RiChat1Line/></p>
                                <p><TbLocationShare/></p>
                            </div>
                            <div className="direita">
                                <p><BsBookmark/></p>
                            </div>
                        </div>


                    </div>
                </section>


            </main>

            <aside>

                <div className="asideCima">
                    <div>
                    <img src={Kirb} alt=""/>
                    <p>Isaarmeris</p>
                    </div>

                    <p>Mudar</p>
                </div>

                <ul>
                    <li>Sobre</li>
                    <li>Ajuda</li>
                    <li>Privacidade</li>
                    <li>Termos</li>
                    <li>Idioma</li>
                </ul>

            </aside>
        </div>
    )
}

export default Body;