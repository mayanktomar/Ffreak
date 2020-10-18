import React, { Component } from 'react';
import { CircularProgressbar,buildStyles,CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import RadialSeparators from "./RadialSeparators";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup,Label, Input, FormText
  } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class UserDashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            isFoodModalOpen:false,
            isGoalModalOpen:false,
            startDate:new Date()
        }
    }

    toggleFoodModal=()=>{
        this.setState({
            isFoodModalOpen:!this.state.isFoodModalOpen
        })
    }
    toggleGoalModal=()=>{
        this.setState({
            isGoalModalOpen:!this.state.isGoalModalOpen
        })
    }
    handleDateChange=(date)=>{
        this.setState({
            startDate:date
        })
    }
    render() {
        return (
            <div style={{height:"88vh",paddingTop:30}}>
                 <Modal isOpen={this.state.isFoodModalOpen} toggle={this.toggleFoodModal}>
                    <ModalHeader toggle={this.toggleFoodModal}>Add food</ModalHeader>
                    <ModalBody>
                        <Form>
                        <FormGroup>
                            <Label for="exampleSelect">Food name</Label>
                            <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="quantity">Quantity</Label>
                            <Input type="number" name="quantity" id="" />
                        </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{backgroundColor:'#3e98c7',width:'25%',color:'black',display:'block',margin:'auto'}}>Add</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.isGoalModalOpen} toggle={this.toggleGoalModal}>
                    <ModalHeader toggle={this.toggleGoalModal}>Add Goal</ModalHeader>
                    <ModalBody>
                        <Form>
                        <FormGroup>
                            <Label for="exampleText">Goal name</Label>
                            <Input type="text" name="text" id="exampleText" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Deadline</Label> <br/>
                            <DatePicker selected={this.state.startDate} onChange={date => this.handleDateChange(date)} />
                        </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{backgroundColor:'#3e98c7',width:'25%',color:'black',display:'block',margin:'auto'}}>Add</Button>
                    </ModalFooter>
                </Modal>
            <div className="container dashhead">
                <div className="row">
                    <div className="col-md-4" style={{marginTop:20}}>
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={66}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                        >
                        {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                            <CircularProgressbarWithChildren
                                value={value}
                                text={`${roundedValue}%`}
                                /* This is important to include, because if you're fully managing the
                                animation yourself, you'll want to disable the CSS animation. */
                                styles={buildStyles({ pathTransition: 'none',  })}
                            >
                               
                            </CircularProgressbarWithChildren>
                            );
                        }}
                        </AnimatedProgressProvider>;
                        <br/>
                        <h2>Calorie Intake</h2>
                        <br/>
                        <Card className="card1">
                            
                            <CardBody>
                            <CardTitle>Calories intake for today</CardTitle>
                            <Table hover>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Age</th>
                                </tr>
                                <tr>
                                    <td>Jill</td>
                                    <td>Smith</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Eve</td>
                                    <td>Jackson</td>
                                    <td>94</td>
                                </tr>
                                </Table>
                            <Button style={{backgroundColor:'#3e98c7',width:'75%',color:'black',display:'block',margin:'auto'}} onClick={this.toggleFoodModal}>Add Food</Button>
                            </CardBody>
                        </Card>
                    </div>
                    
                    <div className="col-md-4" style={{marginTop:20}}>
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={66}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                        >
                        {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                            <CircularProgressbarWithChildren
                                value={value}
                                text={`${roundedValue}%`}
                                /* This is important to include, because if you're fully managing the
                                animation yourself, you'll want to disable the CSS animation. */
                                styles={buildStyles({ pathTransition: 'none', pathColor:'#ffe02c', textColor:'#ffe02c'  })}
                            >
                                
                            </CircularProgressbarWithChildren>
                            );
                        }}
                        </AnimatedProgressProvider>;
                        <br/>
                        <h2>Coins</h2>
                        <br/>
                        <Card className="card2">
                            
                            <CardBody>
                            <CardTitle>Goals to be achieved</CardTitle>
                            <Table hover>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Age</th>
                                </tr>
                                <tr>
                                    <td>Jill</td>
                                    <td>Smith</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Eve</td>
                                    <td>Jackson</td>
                                    <td>94</td>
                                </tr>
                                </Table>
                            <Button style={{backgroundColor:'#ffe02c',width:'75%',color:'black',display:'block',margin:'auto'}} onClick={this.toggleGoalModal}>Add Goal</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-md-4" style={{marginTop:20}}>
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={66}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                        >
                        {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                /* This is important to include, because if you're fully managing the
                                animation yourself, you'll want to disable the CSS animation. */
                                styles={buildStyles({ pathTransition: 'none', pathColor:'#9AB446', textColor:'#9AB446' })}
                            />
                            );
                        }}
                        </AnimatedProgressProvider>;
                        <br/>
                        <h2>Walking distance</h2>
                    </div>
                    
                    </div>
                </div>
                </div>
          
        )
    }
}

export default UserDashboard
