import React, { Component } from 'react'
import { Button,Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input, FormTex } from 'reactstrap';
import headvector from "../assets/headvector.svg";
import axios from "axios";
import {ClientContext} from '../context/clientContext';

class LoginModal extends Component {
    static contextType = ClientContext;
    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password:'',
        }
    }

    handleLogChange=(event)=>{
        const target=event.target;
        const name=target.name;
        const value=target.value;
        this.setState({
           [name]:value
        })
    }


    handleDisabled = ()=>{
        const {email,password} = this.state;
        return email&&password;
    }

    onLogSubmit=async (event)=>{
        event.preventDefault();
        await axios.post('/auth/login', {
            "email":this.state.email,
            "password":this.state.password,
          })
          .then((response) =>{
              this.context.setData(response.data.user);
              localStorage.setItem('token',response.data.token);
              this.context.setToken(response.data.token);
              localStorage.setItem('userId',response.data.userId);
              this.context.setUserId(response.data.userId);
              alert(response.data.message);
              this.props.history.push('/dashboard');
          })
          .catch(function (error) {
            alert(error);
          });
    }

    render(){
        return(
            <Modal isOpen={this.props.isLogModalOpen} toggle={this.props.toggleLogModal}>
                        <ModalHeader toggle={this.props.toggleLogModal}>Login</ModalHeader>
                        <ModalBody>
                        <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" onChange={this.handleLogChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Enter your password" onChange={this.handleLogChange} />
                        </FormGroup>
                        </Form>

                        </ModalBody>
                        <ModalFooter>
                         <Button disabled={!this.handleDisabled()} onClick={this.onLogSubmit}>Login</Button>
                        </ModalFooter>
            </Modal>
        )
    }
}

export default LoginModal;