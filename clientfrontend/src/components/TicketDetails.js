/* eslint-disable no-useless-concat */
/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';

import './Ticket.css';



export default class TicketDetails extends Component {
   
   constructor(props){
       super(props);

       this.state={
           postDisni:{}

       };


   }
   

   
   
  //retrieve special data
  
    retrievePosts(){
      axios.get("http://localhost:8000/postsDisni").then(res=>{
        if(res.data.success){
          this.setState({
            postsDisni:res.data.existingPosts
          });
        console.log(this.state.postsDisni);
  
        }
      });
    }




   componentDidMount(){
       const id = this.props.match.params.id;

       axios.get(`http://localhost:8000/postDisni/${id}`).then((res)=>{
           if(res.data.success){
               this.setState({
                   postDisni:res.data.postDisni
               });

               console.log(this.state.postDisni);
           }
       });

       this.retrievePosts();
  
   }
   

   


   
    render() {

       const {Cus_name,Cus_NIC,ticket_no,Ticket_date,Ticket_time,Ticket_price,Ticket_from,Ticket_rout,Ticket_miles,Ticket_destination,Ticket_seat_no}=this.state.postDisni;

        return (
        <div>
            <div className="c2" >




            <div className="background2">

                
                <h4 style={{fontSize:'40px',color:'white',textShadow: '1px 2px 5px black'}}><center>Your Ticket Details</center></h4>

                <button className="btn btn-success" style={{marginLeft:'800px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}><a href="/homeDisni" 
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button> 

                <hr />

                <dl className="row" style={{textShadow: '1px 2px 18px black',fontSize:'22px',color:'white'}}>
                    <dt className="col-sm-3">Name:</dt>
                    <dd className="col-sm-9">{Cus_name}</dd>

                    <dt className="col-sm-3">NIC no:</dt>
                    <dd className="col-sm-9">{Cus_NIC}</dd>

                    <dt className="col-sm-3">Booking Date:</dt>
                    <dd className="col-sm-9">{Ticket_date}</dd>

                    <dt className="col-sm-3">Scheduled time:</dt>
                    <dd className="col-sm-9">{Ticket_time}</dd>

                    <dt className="col-sm-3">Starting point:</dt>
                    <dd className="col-sm-9">{Ticket_from}</dd>

                    <dt className="col-sm-3">Destination:</dt>
                    <dd className="col-sm-9">{Ticket_destination}</dd>

                    <dt className="col-sm-3">Bus rout:</dt>
                    <dd className="col-sm-9">{Ticket_rout}</dd>

                    <dt className="col-sm-3">Miles:</dt>
                    <dd className="col-sm-9">{Ticket_miles}Km</dd>

                    <dt className="col-sm-3">Price per mile:</dt>
                    <dd className="col-sm-9">10</dd>

                    <dt className="col-sm-3">Ticket Price: </dt>
                    <dd className="col-sm-9">{Ticket_price}.00 (miles*price per mile)</dd>

                    <dt className="col-sm-3">Seat no:</dt>
                    <dd className="col-sm-9">{Ticket_seat_no}</dd>




                     </dl>

                
                  


                 </div>           
                 
    
            </div>
       
            <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"40px",height:"170px"}}>

<div>

    <div class="row" style={{marginLeft:"700px",height:"100px"}}>

    <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">

        <a class="fb-ic" style={{paddingLeft:"10px"}}>
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="tw-ic"  style={{paddingLeft:"20px"}}>
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="gplus-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="li-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
    
        <a class="ins-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="pin-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
        </a>
        </div>
    </div>

    </div>

</div>

<div class="footer-copyright text-center py-3" style={{color:"white"}}>© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> Travelling Express</a>
</div>

</footer>
        </div>        
            
        )
    }
}
