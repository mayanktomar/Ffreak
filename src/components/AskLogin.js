import React, { Component } from 'react'
import { Button,Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input, FormTex } from 'reactstrap';
import headvector from "../assets/headvector.svg";
import axios from "axios";
import RegisterModal from './RegisterModal';

export class AskLogin extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            isRegModalOpen:false,
        }
    }

    toggleRegModal=()=>{
        this.setState({
          isRegModalOpen:!this.state.isRegModalOpen
        })
    }
    
    render() {
        return (
        <div>
            <div class="container loginhead">
                <div class="row">
                    <div class="col-md-6">
                        <h1>Lorem Ipsum Dolor Loren Ipsum Dolor</h1>
                        <p style={{fontFamily:'italic'}}>Loren Ipsum Dolor</p>
                        <br/>
                        <Button style={{backgroundColor:'#ffe02c',width:'75%',color:'black'}}>Login</Button>
                        <br/>
                        <br/>
                        <Button style={{backgroundColor:'#ffe02c',width:'75%',color:'black'}} onClick={this.toggleRegModal}>Register</Button>
                    </div>
                    <div class="col-md-6" style={{paddingBottom:30,paddingTop:30}}>
                        <img src={headvector}/>
                    </div>
                </div>
            </div>
            <RegisterModal isRegModalOpen={this.state.isRegModalOpen} toggleRegModal={this.toggleRegModal}/>
        </div>
        )
    }
}

export default AskLogin
