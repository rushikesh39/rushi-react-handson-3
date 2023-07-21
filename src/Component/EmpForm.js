import React,{Component} from 'react'
import EmpData from './EmpData'

class EmpForm extends Component
{
    state={
        Name:'',
        Dept:'',
        Rating:'',
        formDisplay:true,
        dataDisplay:false,
        EmpData:[]
    }
    handlechange=(e)=>{
       this.setState({[e.target.name]:e.target.value})
       console.log(e.target.value)
    }
    handleBack=()=>{
      this.setState({
        dataDisplay:false,
        formDisplay:true,
      })
      console.log('back call')
    }
    
    handleSubmit = (e) => {
        console.log('handle submit')
        e.preventDefault();
        const tempObj = {
          name: this.state.Name,
          dept: this.state.Dept,
          rating: this.state.Rating
        };
        this.state.EmpData.push(tempObj)
        this.setState(() => ({
        EmpData:this.state.EmpData,
        formDisplay:false,
        dataDisplay:true,
          Name: '',
          Dept: '',
          Rating: ''
        }));
       
      };
  
    render(){
        // console.log(this.state);
      

        return(
            <div className='form'>
           
            {this.state.formDisplay && 
            
            <form>
               <h1>Employee FeedBack Form</h1>
               <br/>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='Name' value={this.state.Name} onChange={this.handlechange}/>
            <br/>
            <br/>
            <label htmlFor='dept'>DepartMent:</label>
            <input type='text' id='dept' name='Dept' value={this.state.Dept} onChange={this.handlechange}/>
            <br/>
            <br/>
            <label htmlFor='rating'>Rating</label>
            <input type='number' id='rating' name='Rating' value={this.state.Rating} onChange={this.handlechange}/>
            <br/>
            <br/>
            <button type='button' onClick={this.handleSubmit}>Submit</button>
        </form>
        
            }
            
            {
              this.state.dataDisplay &&<EmpData data={this.state} backFunction={this.handleBack}/>
            
                
               
            }
                    

                
            
            </div>
        )
    }
}
export default EmpForm