import React from 'react';
import { Navigate } from 'react-router-dom'

function PrivateRoute(props) {
    // Verifica se o usuário está logado
    const logado = localStorage.getItem('sessionToken') ? true : false;
    
    // Se ele n estiver logado, voltar pra pág de Login
    return logado ? props.children : <Navigate to="/entrar" />;
}

export default PrivateRoute;