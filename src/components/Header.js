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

export class Header extends Component {
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

   
    render() {
        return (
            <div>

              

                 <Navbar dark expand="md">
        <NavbarBrand href="/">Ffreak</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
           
          </Nav>
          <NavbarText><i class="fa fa-user" aria-hidden="true"></i></NavbarText>
        </Collapse>
      </Navbar>

      
            </div>
        )
    }
}

export default Header
