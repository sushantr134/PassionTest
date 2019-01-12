import React from 'react'
import {connect} from 'react-redux'
import {getList} from '../../../redux/actions/Lists/getItemsAction'
import {GoogleLogin,GoogleLogout} from 'react-google-login'

import CategoriesList from './Categories'
import VerticalsList from './Verticals'
import CoursesList from './Courses'

import './styles/List.css'

const UserProfile = (props) => {
    return (
        <div className="__userProfile">
           <div className="__user">
             <label>{props.profileData.name}</label>
             <img title={props.profileData.name} src={props.profileData.profilePic} alt={props.profileData.name} />
           </div>
        </div>
    )
}

class MainList extends React.Component
{
    constructor(props)
    {
        super(props)
        this.handleLoginSuccess = this.handleLoginSuccess.bind(this)
        this.handleLoginFailure = this.handleLoginFailure.bind(this)

        this.state = {
            userInfo:{}
        }
    }
    
    handleLoginSuccess = (responseFromGoogle)=>{
              if(responseFromGoogle.accessToken)
              {
                  this.setState({userInfo:{
                        token:responseFromGoogle.accessToken,
                        name:responseFromGoogle.profileObj.name,
                        profilePic:responseFromGoogle.profileObj.imageUrl
                    }})
              }
    }
    handleLoginFailure = (responseFromGoogle) => {
       alert(responseFromGoogle.error)
    }

   render()
   {
    return (
         <div className="list__Container">
             
             <ul>   
                {this.state.userInfo.token && <UserProfile profileData={this.state.userInfo} />}

                 <li onMouseOver={()=>this.props.onFetchList_Verticals()}><label>Verticals</label>
                     <div className="list_block">
                         {this.props.listStore.typeofList === 'verticals' && <VerticalsList listData={this.props.listStore.listItems} />}
                     </div>
                 </li>
                 <li onMouseOver={()=>this.props.onFetchList_Categories()}><label>Categories</label>
                 <div className="list_block">
                 {this.props.listStore.typeofList === 'categories' && <CategoriesList listData={this.props.listStore.listItems} />}
                     </div>
                 </li>
                 <li onMouseOver={()=>this.props.onFetchList_Courses()}><label>Courses</label>
                 <div className="list_block">
                 {this.props.listStore.typeofList === 'courses' && <CoursesList listData={this.props.listStore.listItems} />}
                     </div>
                 </li>
             
                 { this.state.userInfo.token 
                    ? <GoogleLogout onLogoutSuccess={()=>this.setState({userInfo:{}})} />
                    : <GoogleLogin clientId={`${process.env.GOOGLE_CLIENT_ID}`} onSuccess={(res)=>this.handleLoginSuccess(res)} onFailure={(res)=>this.handleLoginFailure(res)} buttonText="Login With OAuth Google"/> }
             </ul>
          </div> 
    )
   }

}

const mapStateToProps = (state) => {
    return {
         listStore:state.listStore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchList_Categories: () => dispatch(getList('categories')),
        onFetchList_Courses: () => dispatch(getList('courses')),
        onFetchList_Verticals: () => dispatch(getList('verticals'))
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(MainList)