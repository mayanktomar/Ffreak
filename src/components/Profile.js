import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Table
  } from 'reactstrap';
  

export class Profile extends Component {
    render() {
        return (
            <div style={{height:"88vh",paddingTop:30}}>
                <div className="container profile">
                    <h1 className="headings">Profile</h1>
                    <div className="row">
                        <div className="col-md-6">
                        <Card>
                            <CardBody>
                            <CardTitle>Starting Weight</CardTitle>
                            <hr/>
                            <h2>65 Kgs</h2>
                            
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-md-6">
                        <Card>
                            <CardBody>
                            <CardTitle>Current Weight</CardTitle>
                            <hr/>
                            <h2>65 Kgs</h2>
                            
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-md-6">
                        <Card>
                            <CardBody>
                            <CardTitle>Height</CardTitle>
                            <hr/>
                            <h2>5.6 feet</h2>
                            
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-md-6">
                        <Card>
                            <CardBody>
                            <CardTitle>BMI</CardTitle>
                            <hr/>
                            <h2>4.0</h2>
                            
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
                    <tbody>
                        <tr style={{textAlign:'center'}}>
                            <td>hello</td>
                            <td>helllllllllllllllllllllooooooooooo</td>
                        </tr>
                        <tr style={{textAlign:'center'}}>
                            <td>hellohgughueihguerigheruigheruigherugheiu0</td>
                            <td>helllllllllllllllllllllooooooooooo</td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Profile
