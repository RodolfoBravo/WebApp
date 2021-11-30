import React, { Component } from "react";

class Signin extends Component {
    render(){
        return(
            <div class="container abs-center">
                <div class="row">
                    <div class="col caja__trasera">
                        <form class="form-signin">
                            <h1 class="h3 mb-3 fw-normal">Iniciar Sesión para entrar</h1>
                        
                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Contraseña</label>
                            </div>
                        
                            <div class="checkbox mb-3">
                                <label>
                                <input type="checkbox" value="remember-me" /> Recordar
                                </label>
                            </div>
                            <div>
                                <a href="/register">Registrarse</a>
                            </div>
                                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                <p class="mt-5 mb-3 text-muted">&copy; Burgundy 2021</p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;