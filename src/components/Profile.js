import Axios from 'axios';
import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Table
  } from 'reactstrap';
import { ClientContext } from '../context/clientContext';
  

export class Profile extends Component {
    static contextType = ClientContext;
    constructor(props){
        super(props);
        this.state={
            data:{},
            weight:[],
            height:[]
        }
    }

    getUserId=async()=>{
        let data = await localStorage.getItem('userId');
        Axios.get(`/user/get-specific-user/${data}`).then((result)=>{
            console.log(result.data.user)
            this.setState({data:result.data.user,height:result.data.user.height,weight:result.data.user.weight});
        })
    }

    componentDidMount(){
        this.getUserId();
    }

    render() {
        return (
            <div style={{height:"88vh",paddingTop:30}}>
                <div className="container profile">
                    <h1 className="headings">Profile</h1>
                    <img src={require('../assets/dummy.jpg')} style={{borderRadius:50,height:100,width:100,display:"block",marginLeft:"auto",marginRight:"auto"}}/>
                    <h6 className="prof-name">{this.state.data.name}</h6>
                    <h6 className="prof-email">{this.state.data.email}</h6>
                    <div className="row">
                        <div className="col-md-6">
                        <Card>
                            <CardBody>
                            <CardTitle style={{color:"#ffe02c",fontSize:20,fontWeight:"bold"}}>Starting Weight</CardTitle>
                            <hr/>
                            <h2>{this.state.weight[0]} Kgs</h2>
                            
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-md-6">
                        <Card>
                            <CardBody>
                            <CardTitle style={{color:"#ffe02c",fontSize:20,fontWeight:"bold"}}>Current Weight</CardTitle>
                            <hr/>
                            <h2>{this.state.weight[this.state.weight.length-1]} Kgs</h2>
                            
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-md-6">
                        <Card>
                            <CardBody>
                            <CardTitle style={{color:"#ffe02c",fontSize:20,fontWeight:"bold"}}>Height</CardTitle>
                            <hr/>
                            <h2>{this.state.height[0]} feet</h2>
                            
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-md-6">
                        <Card>
                            <CardBody>
                            <CardTitle style={{color:"#ffe02c",fontSize:20,fontWeight:"bold"}}>BMI</CardTitle>
                            <hr/>
                            <h2>{(this.state.weight[0]/(this.state.height[0]*this.state.height[0])).toPrecision(4)}</h2>
                            
                            </CardBody>
                        </Card>
                        </div>
                    </div>

                    <Table >
                    {/* <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Name</td>
                        <td>Otto</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                        
                    </tbody> */}
                    
                    </Table>
                </div>
            </div>
        )
    }
}

export default Profile
