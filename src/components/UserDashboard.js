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
import moment from "moment";
import axios from 'axios';
import {ClientContext} from '../context/clientContext';
import {Caloriesdata} from './Caloriesdata';

export class UserDashboard extends Component {
    static contextType=ClientContext;
    constructor(props){
        super(props);
        this.state={
            foodData:[],
            calorieDetail:{},
            foodsTaken:[],
            isFoodModalOpen:false,
            isGoalModalOpen:false,
            startDate:new Date().getUTCDate(),
            date:moment(new Date()).format("YYYY-MM-DD"),
            totalCalories:0,
            fooditem:'',
            quantity:0,
            userpoints:0,
            goal:''
            
        }
    }

     getUserId = async() =>{
        const data = await localStorage.getItem('userId');
         axios.post('/food/get-daily-calories-sum', {
            date:this.state.date,
            userId:data
          })
          .then( (response) => {
           this.setState({
               totalCalories:response.data.total
           })
        
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      getFoodIntake= async() =>{
        const data = await localStorage.getItem('userId');
         axios.post('/food/get-daily-food', {
            date:this.state.date,
            userId:data
          })
          .then( (response) => {
              this.setState({
                  foodsTaken:response.data.foods
              })
         console.log(response.data.foods)
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      getUserPoints=async() =>{
        const data = await localStorage.getItem('userId');
        axios.get('/user/get-specific-user/'+data)
            .then(function (response) {
                this.setState({
                    userpoints:response.data.user.points
                })
               
            })
            .catch(function (error) {
                console.log(error);
            });

      }
    componentDidMount=()=>{
       
        this.getUserId();
        this.getFoodIntake();
        this.getUserPoints();
        Caloriesdata.map((c)=>{
            const temp={};
            const temp1=this.state.calorieDetail;
           const t=this.state.foodData;
           temp["name"]=c["Food and Serving"];
           temp["calories"]=c["Calories"];
           temp1[c["Food and Serving"]]=c["Calories"];
           t.push(temp);
           this.setState({
               foodData:t,
               calorieDetail:temp1
           })
        })
    }
    toggleFoodModal=()=>{
        console.log(this.context.userId);
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

    handleInputChange=(event)=>{
        const target=event.target;
        const name=target.name;
        const value=target.value;
        this.setState({
            [name]:value
        })
    }

    onFoodSubmit=()=>{
        axios.post('/food/create-food/'+this.context.userId, {
            foodName:this.state.fooditem,
            calories: (this.state.quantity*this.state.calorieDetail[this.state.fooditem]),
            date:this.state.date
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          this.getUserId();
          this.getFoodIntake();
          this.toggleFoodModal();
    }

    onGoalSubmit=()=>{
        
    }
    render() {
        const dropdownoptions=this.state.foodData.map((f)=>{
            return(
                <option>{f.name}</option>
            )
        })

        const foodtable=this.state.foodsTaken.map((f)=>{
            return(
                <tr>
                <td>{f.foodName}</td>
                <td>{f.calories}</td>
                
            </tr>
            )
        })
        
        return (
            <div style={{height:"88vh",paddingTop:30}}>
                 <Modal isOpen={this.state.isFoodModalOpen} toggle={this.toggleFoodModal}>
                    <ModalHeader toggle={this.toggleFoodModal}>Add food</ModalHeader>
                    <ModalBody>
                        <Form>
                        <FormGroup>
                            <Label for="exampleSelect">Food name</Label>
                            <Input type="select" name="fooditem" id="exampleSelect" onChange={this.handleInputChange}>
                            {/* <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option> */}
                            {dropdownoptions}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="quantity">Quantity</Label>
                            <Input type="number" name="quantity" id="" onChange={this.handleInputChange}/>
                        </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{backgroundColor:'#3e98c7',width:'25%',color:'black',display:'block',margin:'auto'}} onClick={this.onFoodSubmit}>Add</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.isGoalModalOpen} toggle={this.toggleGoalModal}>
                    <ModalHeader toggle={this.toggleGoalModal}>Add Goal</ModalHeader>
                    <ModalBody>
                        <Form>
                        <FormGroup>
                            <Label for="exampleText">Goal name</Label>
                            <Input type="text" name="goal" id="exampleText" onChange={this.handleInputChange} />
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
                    <div className="col-md-4">
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={(this.state.totalCalories/2500)*100}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                        >
                        {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                            <CircularProgressbarWithChildren
                                value={value}
                                text={`${this.state.totalCalories}`}
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
                                    <th>Food</th>
                                    <th>Calories</th>
                                    
                                </tr>
                                 {foodtable}
                                </Table>
                            </CardBody>
                        </Card>
                        <br/>
                        <Button style={{backgroundColor:'#3e98c7',width:'75%',color:'black',display:'block',margin:'auto'}} onClick={this.toggleFoodModal}>Add Food</Button>

                    </div>
                    
                    <div className="col-md-4">
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={this.state.userpoints}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                        >
                        {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                            <CircularProgressbarWithChildren
                                value={value}
                                text={`${roundedValue}`}
                                /* This is important to include, because if you're fully managing the
                                animation yourself, you'll want to disable the CSS animation. */
                                styles={buildStyles({ pathTransition: 'none', pathColor:'#ffe02c', textColor:'#ffe02c'  })}
                            >
                                
                            </CircularProgressbarWithChildren>
                            );
                        }}
                        </AnimatedProgressProvider>;
                        <br/>
                        <h2>Points</h2>
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
                            </CardBody>
                        </Card>
                        <br/>
                        <Button style={{backgroundColor:'#ffe02c',width:'75%',color:'black',display:'block',margin:'auto'}} onClick={this.toggleGoalModal}>Add Goal</Button>

                    </div>

                    <div className="col-md-4">
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
