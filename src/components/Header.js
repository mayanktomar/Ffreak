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
    NavbarText,
    Badge
  } from 'reactstrap';
  import {ClientContext} from '../context/clientContext';
  import {IoMdLogOut,IoIosNotifications} from 'react-icons/io';
  import {GiAchievement} from 'react-icons/gi';
  import {CgProfile} from 'react-icons/cg';
import NotificationModal from './NotificationModal';
import Axios from 'axios';

export class Header extends Component {
    static contextType = ClientContext;
    constructor(props)
    {
        super(props);
        this.state={
            isOpen:false,
            isRegModalOpen:false,
            isNotModalOpen:false,
            data:[],
            count:null
        }
    }

    getUserId=async()=>{
        let data = await localStorage.getItem('userId');
        Axios.get(`/notification/get-user-notification/${data}`).then((result)=>{
            this.setState({data:result.data.data,count:result.data.data.length})
        })
    }

    componentDidMount(){
        this.getUserId();
    }

    toggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    toggleNotModal=()=>{
        this.setState({isNotModalOpen:!this.state.isNotModalOpen});
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
                <NavbarBrand className="main-logo" href={this.context.token!==null?'/dashboard':"/"}>Ffreak</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                
                    </Nav>
                    <NavbarText><i class="fa fa-user" aria-hidden="true"></i></NavbarText>
                </Collapse>
                {this.context.token!==null&&this.context.token!=="null"?
                <div style={{width:"150px",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                    <GiAchievement size={25} onClick={()=>{this.props.history.push('/achievement')}}/>
                <div>
                <IoIosNotifications size={22} onClick={this.toggleNotModal}/><Badge color="secondary">{this.state.count}</Badge>
                </div>
                <CgProfile size={22} onClick={()=>{this.props.history.push('/profile')}}/>
                <IoMdLogOut size={22} onClick={this.logoutHandler}/>
                </div>:null}
            </Navbar>
            <NotificationModal data={this.state.data} isNotModalOpen={this.state.isNotModalOpen} toggleNotModal={this.toggleNotModal}/>
        </div>
        )
    }
}

export default Header
