import React, { Component } from 'react';
import { FormCurso } from './form';
import { ListCurso } from './list';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos'

export class CadastroCurso extends Component {

    initialState = {
        _id: null,
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA'
    }

    state = {...this.initialState, cursos: []}

    constructor(props) {
        super(props);
        this.listar();
    }

    listar(){
        axios.get(URL).then(response => {
            this.setState({cursos : response.data})
        })
    }

    codigoChange(e){
        this.setState({_id: e.target.value});
    }

    //codigoChange(e){
    //    this.setState({codigo: e.target.value});
    //}

    descricaoChange(e){
        this.setState({descricao: e.target.value});
    }

    cargaHorariaChange(e){
        this.setState({cargaHoraria: e.target.value});
    }

    precoChange(e){
        this.setState({preco: e.target.value});
    }

    categoriaChange(e){
        this.setState({categoria: e.target.value});
    }

    adicionar(e){
        e.persist();

        const {_id, codigo, descricao, cargaHoraria, categoria, preco} = this.state
    
        const body = {
            _id, 
            codigo,
            descricao,
            cargaHoraria,
            categoria,
            preco
        }
        
        if(_id){

            axios.put(`${URL}/${_id}`, body)
            .then(_ => this.trataErro(e, 'Atualizado'))
              //  this.limpar(e)
               // this.listar()
                //alert('Curso adicionado')

        .catch(error => {
            this.trataErro(error, 'Ocorreu um erro nesta edicao')
         //   console.log(error)
           // alert('Erro ao adicionar curso')
        
        })
        }else{

            axios.post(URL, body)
            .then(_ => this.trataErro(e, 'Adicionado'))
            .catch(error => {

                this.trataErro(error, 'Ocorreu erro')
            })
        }
    }

    limpar(e){
        e.preventDefault()
        this.setState(this.initialState)
    }

    removerCurso(curso){
        if(window.confirm(`Deseja remover este curso? - ${curso.descricao}`)){
            axios.delete(`${URL}/${curso._id}`)
            .then(_ =>{
                this.listar()
                alert('Curso Deletado!')
            })

            .catch(error => {
                alert('Erro ao deletar!')
            })
        }
    }

    editaCurso(curso){
        this.setState({
            _id: curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            preco: curso.preco,
            categoria: curso.categoria

        })
    }

    trataSucesso(e, msg){
        this.limpar(e)
        this.listar()
        alert(msg)
    }

    trataErro(error, msg){
        console.log(error)
        alert(msg)
    }

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso 
                    codigo={this.state.codigo}
                    codigoChange={this.codigoChange.bind(this)}
                    descricao={this.state.descricao}
                    descricaoChange={this.descricaoChange.bind(this)}
                    cargaHoraria={this.state.cargaHoraria}
                    cargaHorariaChange={this.cargaHorariaChange.bind(this)}
                    preco={this.state.preco}
                    precoChange={this.precoChange.bind(this)} 
                    categoria={this.state.categoria}
                    categoriaChange={this.categoriaChange.bind(this)} 
                    
                    adicionar={this.adicionar.bind(this)}
                    isAtualizar={this.state._id ? true : false}
                    />
                </div>
                <div className="col-md-6">
                    <ListCurso 
                        cursos={this.state.cursos}
                        removerCurso={this.removerCurso.bind(this)}
                        editaCurso={this.editaCurso.bind(this)}
                    />
                </div>
            </div>
        )
    }
}