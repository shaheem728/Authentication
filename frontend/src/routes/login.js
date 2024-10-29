import { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import { user } from '../endpoints/api';
const Login = () => {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
const handleLogin = () => {
   user(username,password)
}
  

  return (
    <div className="d-flex  flex-column justify-content-center align-items-center p-5"style={{backgroundColor:'yellow'}}>
    <Form className="d-flex  flex-column justify-content-center align-items-center rounded-4"style={{height:'300px',width:'400px',backgroundColor:'white'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" onChange={(e)=> setUsername(e.target.value)} value={username} placeholder="Enter username" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" />
      </Form.Group>
      
      <Button onClick={handleLogin} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Login




