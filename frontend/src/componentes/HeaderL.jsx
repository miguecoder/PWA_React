import React from 'react';
import { Link } from 'react-router-dom';
import icon_32 from '../images/icon_32.png';

function HeaderL() {
  return (
    <div className="headerL">
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <div className="container">
          <Link to="/homeL" className="navbar-brand" href="#"> <img src={icon_32} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/><i>Ensigna</i> </Link>
          
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/homeL" className="nav-link active" href="#" aria-current="page">Inicio <span className="visually-hidden">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link active" href="#">Perfil</Link>
              </li>
              <li className="nav-item">
                <Link to="/coursesSL" className="nav-link active" href="#">Cursos</Link>
              </li>
              <li className="nav-item">
                <Link to="/coursesL" className="nav-link active" href="#">Mis Cursos</Link>
              </li>
              
              <li className="nav-item">
                <Link to="/" className="nav-link active" href="#">Cerrar sesión</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Students</Link>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link to="/" className="dropdown-item" href="#">Certificate</Link>
                  <Link to="/" className="dropdown-item" href="#">Courses</Link>
                </div>
              </li> */}
            </ul>
            
          </div>
        </div>
      </nav>
      <div className="row row-cols-1 row-cols-md-7 row-cols-lg-7 px-1">
        <div className="col-md-8 mx-auto">
          <div className="mt-5 pt-2 mx-2">
            <form className="d-flex my-2 py-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="¿Que quieres aprender?"/>
                <button className="btn btn-primary btn-primary-outline-success" type="submit">Buscar</button>
            </form>
        </div>
        </div>
        
      </div>
    </div>
    
  );
}

export default HeaderL;