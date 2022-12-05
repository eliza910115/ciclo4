import React, { useState }  from 'react'
import axios from "axios";

const baseURL = "http://localhost:4024/api/login/autenticar";

const Login = () => {

    const [username, createUser] = useState('')
    const [password, createPass] = useState('')
    
    const params = {

        user: username,
        password: password
    }


    const handleSubmit =  async (e) => {
        e.preventDefault()
        const post = params 
        try {
          const res = await axios.post(baseURL, post)
          console.log(res.data)
          if ((res.data.mensaje) === "Autenticacion correcta"){
            alert(res.data.mensaje)
            //habilitar menu
          }else{
            alert(res.data.mensaje)
          }


        } catch (e) {
          alert(e)
        }
      }
      
    return (
        <div class="container" id="container">
        <form   onSubmit={handleSubmit}>
            <div class="container col-5" id="container2">
                <i class="bi bi-person-circle uno"></i>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Usuario</label>
                    <input type="text" class="form-control" id="user" aria-describedby="user"  required  onChange={(event) => {createUser(event.target.value)}}value={username} />

                </div>
                <div class="mb-3" id="impus">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" aria-describedby="password"  required  onChange={(event) => {createPass(event.target.value)}}value={password} />

                </div>
                <button type="submit" class="btn btn-success mt-3">Iniciar Sesión</button>
                <button type="button" class="btn btn-primary mt-3 mx-2" id="btn-registrase"> Registrarse</button>
            </div>
        </form>
    </div>



    );
}

export default Login
