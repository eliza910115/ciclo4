import React, { useState }  from 'react'
import axios from "axios";

const baseURL = "https://jaded-corn-production.up.railway.app/api/ordenes";

const CrearOrdenes = () => {

    const [remitente, createRemitente] = useState('')
    const [ciudad_remitente, createCiudadR] = useState('')
    const [direccion_remitente, createDireccionR] = useState('')
    const [destinatario, createDestinatario] = useState('')
    const [ciudad_destinatario, createCiudadD] = useState('')
    const [direccion_destinatario, createDireccionD] = useState('')
    const [observaciones, createObservaciones] = useState('')

    
    const numero_orden = Date.now(); 


    const params = {
            
        numero_orden: numero_orden,
        remitente: remitente,
        ciudad_remitente: ciudad_remitente,
        direccion_remitente: direccion_remitente,
        destinatario: destinatario,
        ciudad_destinatario: ciudad_destinatario,
        direccion_destinatario: direccion_destinatario,
        observaciones: observaciones
        }


    const handleSubmit =  async (e) => {
        e.preventDefault()
        const post = params 
        try {
          const res = await axios.post(baseURL, post)
          console.log(res.data)
          alert(res.data)
        } catch (e) {
          alert(e)
        }
      }

   return (
    <form class="align-items-center"  onSubmit={handleSubmit}>
   
      <div class="row mx-2 mt-5">
       <h3 className="negro mb-2">Crear Orden</h3>

        <div class="mb-3 col-4">
          <label for="Remitente" class="form-label">Remitente</label>
          <input type="text" class="form-control" id="Remitente" aria-describedby="Remitente" name="Remitente" required  onChange={(event) => {createRemitente(event.target.value)}}value={remitente} />
        </div>

        <div class="mb-3 col-4">
          <label for="ciudadR" class="form-label">Ciudad Remitente</label>
          <input type="text" class="form-control" id="ciudadR" aria-describedby="ciudadR" name="ciudadR" required  onChange={(event) => {createCiudadR(event.target.value)}}value={ciudad_remitente}  />
        </div>

        <div class="mb-3 col-4">
          <label for="direccionR" class="form-label">Dirección Remitente</label>
          <input type="text" class="form-control" id="direccionR" aria-describedby="direccionR" name="direccionR" required  onChange={(event) => {createDireccionR(event.target.value)}}value={direccion_remitente}  /> 
        </div>

        <div class="mb-3 col-4">
          <label for="Destinatario" class="form-label">Destinatario</label>
          <input type="text" class="form-control" id="Destinatario" aria-describedby="Destinatario" name="Destinatario" required  onChange={(event) => {createDestinatario(event.target.value)}}value={destinatario}  />
        </div>

        <div class="mb-3 col-4">
          <label for="ciudadD" class="form-label">Ciudad Destinatario</label>
          <input type="text" class="form-control" id="ciudadD" aria-describedby="ciudadD" name="ciudadD" required  onChange={(event) => {createCiudadD(event.target.value)}}value={ciudad_destinatario}  />
        </div>

        <div class="mb-3 col-4">
          <label for="direccionD" class="form-label">Dirección Destinatario</label>
          <input type="text" class="form-control" id="direccionD" aria-describedby="direccionD" name="direccionD" required  onChange={(event) => {createDireccionD(event.target.value)}}value={direccion_destinatario}  /> 
        </div>

        <div class="mb-4 col-12">
          <label for="observacion" class="form-label">Observación</label>
          <input type="textarea" size="lg" class="form-control" id="observacion" aria-describedby="observacion" name="observacion" required  onChange={(event) => {createObservaciones(event.target.value)}}value={observaciones}  /> 
        </div>

       
        <div class="col-md-12">
          <button type="submit" class="btn btn-success">Crear Orden</button>

        </div>
      </div>
    </form>
    
   )
   
}

export default CrearOrdenes