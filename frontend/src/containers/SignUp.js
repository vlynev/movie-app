import React from 'react';
import {postSignUp} from '../utils/api/actions';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const {data, err} = await postSignUp(this._username.value, this._password.value);
    if (err) {
      // do something here
      return;
    }

    const {message} = data;

    if (message === 'ok') {
      window.location.pathname = '/login'
    }
  }

  render() {
    return (
      <div className="Panel">
        <div className="Grid Grid--alignCenter">
          <div className="Grid-cell u-md-size6of12">
            <div className="Login">
              <div className="LoginForm">
                <div>
                  <form className="Form" noValidate onSubmit={this.handleSubmit.bind(this)}>
                    <fieldset>
                      <div className="Form-group">
                        <label htmlFor="username" className="Form-label">Nombre de usuario</label>
                        <input type="username"
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
                        <input type="password"
                               name="password"
                               id="password"
                               className="Form-field"
                               autoComplete="off"
                               ref={_password => {
                                 this._password = _password
                               }}
                        />
                      </div>
                      <div className="Form-group">
                        <label htmlFor="password" className="Form-label">Repetir Contraseña</label>
                        <input type="password" name="password" id="password" className="Form-field" autoComplete="off"/>
                      </div>
                      <button type="submit" name="button"
                              className="Button Button--primary Button--medium Button--block">Enviar
                      </button>
                    </fieldset>
                  </form>
                  <p className="u-center u-divider-top"><a className="Button Button--link" href="/login">¿Ya tienes
                    cuenta? Entra</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
