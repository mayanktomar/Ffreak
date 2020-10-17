import React, { Component } from 'react'
import { Button,Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input, FormTex } from 'reactstrap';
import headvector from "../assets/headvector.svg";
import axios from "axios";

export class AskLogin extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            isRegModalOpen:false,
            name:'',
            email:'',
            password:'',
            gender:'',
            age:'',
            weight:'',
            height:''
        }
    }

    toggleRegModal=()=>{
        this.setState({
          isRegModalOpen:!this.state.isRegModalOpen
        })
      }

    handleRegChange=(event)=>{
        const target=event.target;
        const name=target.name;
        const value=target.value;
        if (name=="gender")
        {
            const id=target.id;
            this.setState({
                gender:id
            })
        }
        else
        {
        this.setState({
            [name]:value
        })
    }
    }

    onRegSubmit=async (event)=>{
        event.preventDefault();
        await axios.post('/auth/create-user', {
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password,
            "gender":this.state.gender,
            "age":this.state.age,
            "height": this.state.height,
            "weight": this.state.weight
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render() {
        return (
            <div>
                  <Modal isOpen={this.state.isRegModalOpen} toggle={this.toggleRegModal}>
                        <ModalHeader toggle={this.toggleRegModal}>Register</ModalHeader>
                        <ModalBody>
                        <Form>
                        <FormGroup>
                            <Label for="exampleText">Name</Label>
                            <Input type="text" name="name" id="exampleText" onChange={this.handleRegChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={this.handleRegChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={this.handleRegChange} />
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <legend>Gender</legend>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="gender" id="M" onChange={this.handleRegChange} />{' '}
                               Male
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="gender" id="F" onChange={this.handleRegChange} />{' '}
                               Female
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="gender" id="O" onChange={this.handleRegChange} />{' '}
                               Other
                            </Label>
                            </FormGroup>
                            </FormGroup>
                            <FormGroup>
                            <Label for="exampleText">Age</Label>
                            <Input type="text" name="age" id="exampleText" onChange={this.handleRegChange} />
                        </FormGroup> <FormGroup>
                            <Label for="exampleText">Weight (kgs)</Label>
                            <Input type="text" name="weight" id="exampleText" onChange={this.handleRegChange} />
                        </FormGroup> <FormGroup>
                            <Label for="exampleText">Height (feet)</Label>
                            <Input type="text" name="height" id="exampleText" onChange={this.handleRegChange} />
                        </FormGroup>
                        </Form>

                        </ModalBody>
                        <ModalFooter>
                         <Button onClick={this.onRegSubmit}>Register</Button>
                        </ModalFooter>
                  </Modal>
           
            <div class="container loginhead">
                
                <div class="row">
                    <div class="col-md-6">
                        <h1>Lorem Ipsum Dolor Loren Ipsum Dolor</h1>
                        <p style={{fontFamily:'italic'}}>Loren Ipsum Dolor</p>
                        <br/>
                        <Button style={{backgroundColor:'#ffe02c',width:'75%',color:'black'}}>Login</Button>
                        <br/>
                        <br/>
                        <br/>
                        <Button style={{backgroundColor:'#ffe02c',width:'75%',color:'black'}} onClick={this.toggleRegModal}>Register</Button>
                    </div>

                    <div class="col-md-6">
                        <img src={headvector}/>
                    </div>
                </div>
                
            </div>
            </div>
        )
    }
}

export default AskLogin
