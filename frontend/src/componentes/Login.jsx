import React from 'react';
import Portada from '../images/Portada.png'
import { Link } from 'react-router-dom';

function Iniciosesion() {
  return (
    <div className='Iniciosesion'>
      <div className="container">
        <div className="row">
          
          <img src={Portada} style={{maxWidth: "500px"}} className="rounded mx-auto d-block" alt="portada"/>
          <div className="container">
            <div className='mx-auto ' style={{maxWidth: "400px"}} >
            <form className="need-validation">
              <div className="card">
                <div className="card-header">
                  Iniciar sesión
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label for="" className="form-label">Usuario o correo electrónico</label>
                    <input type="text" className="form-control" name="user" id="user" aria-describedby="helpId" placeholder=""/>
                    <small id="helpId" className="form-text text-muted">Escriba su nombre de usuario o correo electronico.</small> 
                  </div>
                        
                  <div className="mb-3">
                    <label for="" className="form-label">Contraseña</label>
                    <input type="password"
                      className="form-control" 
                      name="" 
                      id="" 
                      aria-describedby="helpId" 
                      placeholder=""/>
                    <small id="helpId" className="form-text text-muted">Escriba su contraseña.</small>
                  </div>
                  <Link to="/homeL">
                    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                  </Link>
                  
                </div>
              </div>
            </form>
            <br />
          </div>
          </div>
          
          
          
        </div>        
      </div>
    </div>
      
       
      
  );
}

export default Iniciosesion;