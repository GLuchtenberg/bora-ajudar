import React, {Component} from 'react'

class Modal extends Component{

    render(){
       
        return (
            <div>
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
                <div className="container">

              
                    <div className="modal fade" id="myModal" role="dialog">
                        <div class="lds-heart"><div></div></div>
                        
                    </div>
                    
                </div>

            </div>
        )
    }
}
export default Modal