import React, { Component } from 'react'
import './CSS/todo.css'
import {Link} from 'react-router-dom';
import AddAnswer from './AddAnswer';


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questions: "",
            answer1: "",
            answer2: "",
            answer3: "",
            isFormVisible: false
            


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    questionhandler = (event) => {
        this.setState({
            questions: event.target.value
        })
    }
    answe1handler = (event) => {
        this.setState({
            answer1: event.target.value
        })
    }
    answer2handler = (event) => {
        this.setState({
            answer2: event.target.value
        })
    }

    answer3handler = (event) => {
        this.setState({
            answer3: event.target.value
        })
    }
    addanswer = (e) =>{
          e.preventDefault()
        
    }
    delete = (e) =>{
        e.preventDefault()
      
  }

    handleSubmit = (event) => {
        alert(`${this.state.questions} ${this.state.answer1} ${this.state.answer2} ${this.state.answer3}  Add Question Answer Successfully !!!!`)
        console.log(this.state);
        this.setState({
            questions: "",
            answer1: "",
            answer2: '',
            answer3: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>ADD A CUSTOM QUESTION</h1>
                    <label>QUESTIONS:</label>

                    <br/> <input type="text" 
                    value={this.state.questions} 
                    onChange={this.questionhandler} 
                    placeholder="Enter Your Questions" 
                    required /><br/>
            

                    <label>ANSWERS:</label> <br/>

                      <input type="text" 
                      value={this.state.answer1}
                       onChange={this. answe1handler} 
                       placeholder="Answer1"
                       required
                       
                       /><br/>
   
                      <input type="text" 
                      value={this.state.answer2} 
                      onChange={this. answer2handler} 
                      placeholder="Answer2"
                      required/><br />

                     <input type="text" 
                     value={this.state.answer3} 
                     onChange={this.  answer3handler} 
                     placeholder="Answer3" /><br />

                      {/* <input type="text" 
                     value={this.state.answer3} 
                     onChange={this.  answer3handler} 
                     placeholder="Answer4" 
                     /><br /> */}
                    
                    {/* <input type="button" value="ADD NEW ANSWER" onClick = "addanswer"/><br/> */}
                    <Link to="/add" className="btn btn-danger ml-2">ADD NEW ANSWER</Link>

                    <input type="submit" value="Save Change" />
                </form>

            </div>
            
        )
    }
}

export default Home