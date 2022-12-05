import React from "react";
import '../Estilos/navbar.css'

function Registro() {
    return (
        <form>
        <div class="container-fluid col-5" id="container2" >
            <i class="bi bi-person-circle uno" ></i>
            
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" >Usuario</label>
                <input type="text" className="form-control" id="exampleInputEmail1"/>
                
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" >Contraseña</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" >Nombre Completo</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" >Correo</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
           
            <button type="submit" class="btn btn-success mt-3 ">Guardar</button>
            <a href="login.html"><button type="button" class="btn btn-primary mt-3 mx-2" id="btn-registrase" >Siguiente</button></a>

        </div>
        </form>



    );
}
export default Registro;