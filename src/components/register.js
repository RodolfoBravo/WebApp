import React, { Component } from "react";

class Register extends Component{
    render(){
        return(
            <div class="container abs-center">
                <div class="row">
                    <div class="col caja__trasera">
                        <form action="" className="form-signin">
                            <h2 class="h3 mb-3 fw-normal">Registrarse </h2>

                            <div class="form-floating">
                                <input type="text" class="form-control form-control-label" id="colFormLabel" placeholder="Juan" />
                                <label for="colFormLabel" class="col-sm-2 col-form-label">Nombre</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Hernandez" />
                                <label for="floatingInput">Apellido</label>
                            </div>
                            <div class="form-floating">
                                <input type="date" class="form-control" id="floatingInput" placeholder="Hernandez" />
                                <label for="floatingInput">Fecha de nacimiento</label>
                            </div>
                            <div class="form-floating">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Selecciona uno</option>
                                    <option value="1">Mujer</option>
                                    <option value="2">Hombre</option>+
                                </select>
                                <label for="floatingInput">Genero</label>
                            </div>
                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" />
                                <label for="floatingPassword">Contraseña</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" />
                                <label for="floatingPassword">Confirmar Contraseña</label>
                            </div>
                            <div class="checkbox mb-3">
                                <input type="checkbox" value="remember-me" />
                                <label for="floatingInput">Terminos y Condiciones</label>
                            </div>
                                <button class="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>
                                <p class="mt-5 mb-3 text-muted">&copy; Burgundy 2021</p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;