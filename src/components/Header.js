import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  import {ClientContext} from '../context/clientContext';
  import {IoMdLogOut} from 'react-icons/io';

export class Header extends Component {
    static contextType = ClientContext;
    constructor(props)
    {
        super(props);
        this.state={
            isOpen:false,
            isRegModalOpen:false
        }
    }

    toggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    logoutHandler =()=>{
        this.context.setData(null);
            localStorage.setItem('token',null);
            this.context.setToken(null);
            localStorage.setItem('userId',null);
            this.context.setUserId(null);
            this.props.history.push('/');
    }
   
    render() {
        return (
            <div>
        <Navbar dark expand="md">
        <NavbarBrand href={this.context.token!==null?'/dashboard':"/"}>Ffreak</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
           
          </Nav>
          <NavbarText><i class="fa fa-user" aria-hidden="true"></i></NavbarText>
        </Collapse>
        {this.context.token?
        <IoMdLogOut onClick={this.logoutHandler}/>:null}
      </Navbar>
            </div>
        )
    }
}

export default Header
