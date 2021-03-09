import {Component} from 'react'
import axios from 'axios'
const url = 'http://localhost:1111/doctor/add'
class Loginpage extends Component
{
    constructor()
    {
        super()
        this.state={
            file:''
        }
    }
    changehandler=(e)=>
    {
        this.setState({file:e.target.files[0]})
    }
    buttonhandler=()=>
    {
        const formdata = new FormData()
        formdata.append("file",this.state.file)
        axios.post(url,formdata).then(res=>console.log(res.data))
        // console.log("file",formdata.get("file"))

    }
    render()
    {
        return(
            <div>
                <input placeholder='Enter file' type='file' name='file' onChange={this.changehandler}/>
                <button onClick={this.buttonhandler}>Submit</button>
            </div>
        )
    }
}
export default Loginpage