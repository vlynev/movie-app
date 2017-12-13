import React from 'react';
import {postLogin} from '../utils/api/actions';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const {data, err} = await postLogin(this._username.value, this._password.value);
    if (err) {
      // do something here
      return;
    }
    const {token} = data;

    localStorage.setItem('token', token);
    window.location.pathname = '/';
  }

  render() {
    return (
      <div className="Grid Grid--alignCenter">
        <div className="Grid-cell u-md-size6of12">
          <div className="Login">
            <div className="LoginForm">
              <div>
                <form className="Form" noValidate onSubmit={this.handleSubmit.bind(this)}>
                  <fieldset>
                    <div className="Form-group">
                      <label htmlFor="username" className="Form-label">Nombre de usuario</label>
                      <input
                        type="username"
                        name="username"
                        id="username"
                        className="Form-field"
                        autoComplete="on"
                        ref={_username => {
                          this._username = _username
                        }}
                      />
                    </div>
                    <div className="Form-group">
                      <label htmlFor="password" className="Form-label">Contraseña</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="Form-field"
                        autoComplete="off"
                        ref={_password => {
                          this._password = _password
                        }}
                      />
                    </div>
                    <button type="submit" name="button" className="Button Button--primary Button--medium Button--block">
                      Entrar en tu cuenta
                    </button>
                  </fieldset>
                </form>
                <p className="u-center u-divider-top"><a className="Button Button--link" href="/users/sign_up">¿Todavía
                  no tienes cuenta? ¡Regístrate!</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
