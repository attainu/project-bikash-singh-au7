import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';

const Modal = ({inputLogin, btnLogin}) => {

    return (
        <Fragment>
            <div className="modal fade" id="loginModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="title-default-bold mb-none">
                                Login
                            </div>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="login-form">
                                <input
                                    className="main-input-box"
                                    type="text"
                                    placeholder="Email address"
                                    onChange={inputLogin("email")}
                                    // value={login.userEmail}
                                />
                                <input
                                    className="main-input-box"
                                    type="password"
                                    placeholder="Password"
                                    onChange={inputLogin("password")}
                                    // value={login.userPassword}
                                />
                                <div className="inline-box mb-5 mt-4">
                                    <label className="lost-password">
                                        <Link to="/">Lost your password?</Link>
                                    </label>
                                </div>
                                <div className="inline-box mb-5 mt-4">
                                    <a className="btn-register" id="register">
                                        <i className="fas fa-user"></i>
                                        Register Here!
                                    </a>
                                </div>
                                <div className="inline-box mb-5 mt-4">
                                    <button
                                        className="btn-fill"
                                        type="submit"
                                        onClick={btnLogin}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal;