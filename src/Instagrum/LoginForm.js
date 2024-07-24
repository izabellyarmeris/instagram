import React, { useState } from 'react';
import facebooklogo from '../midia/faceb.png';
import instagram from '../midia/instagram.png';
import loginho from '../midia/loginho.png';
import google from '../midia/google.jpeg';
import microsoft from '../midia/microsoft.jpeg';
import '../App.css';


const LoginForm = () => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const manipulaLogin = () => {

        if (nomeUsuario === 'bell' && senhaUsuario === 'senha') {
            window.location.href = './PaginaInicial';



        } else {
            setErrorMessage('Nome de usuário ou senha incorretos.');
        }
    };

    return (
        <div className="main">
            <div className='caixa-1'>
                <div

                    className="login-container">



                    <img className='cave' src={loginho} alt="" />
                    <img className='insta' src={instagram} alt="" ></img>


                    <button className='botao-1' onClick={manipulaLogin}>  <img src={facebooklogo} alt="" />Continuar com o Facebook</button>


                    <input
                        type="text"
                        placeholder="Telefone, nome de usuário ou email"
                        value={nomeUsuario}
                        onChange={(e) => setNomeUsuario(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senhaUsuario}
                        onChange={(e) => setSenhaUsuario(e.target.value)}
                        required
                    />

                    <div>
                        <button onClick={manipulaLogin}>Entrar</button>
                        <a href='#' className='sen'> Esqueceu a senha ? </a>
                    </div>


                    <p style={{ color: 'red' }}>{errorMessage}
                    </p>


                </div>

                <div className='cadastro'>
                    <p> Não tem uma Conta?</p>
                    <a href='#'> Registra-se</a>

                </div>
                <h4>Obtém a aplicação</h4>
                <img className='google' src={google} alt="" />
                <img className='microsoft' src={microsoft} alt="" />

            </div>
        </div>

    );

};



export default LoginForm;