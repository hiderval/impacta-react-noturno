import React from 'react';
import { Cabecalho } from '../../componentes/cabecalho';
import { CadastroCurso } from './cadastro';

export class CursoIndex extends React.Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Cursos"
                    subtitulo="cadastro de cursos" />
                <CadastroCurso />
            </div>
        )
    }
}