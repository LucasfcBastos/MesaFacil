import { useState } from "react";
import { api } from "../../services/api";
import "../../styles/components/Forms.css";
import "../../styles/pages/AuthUser.css";
import Button from "../../components/btn/BtnNavigate";
import Cross from "../../components/btn/BtnCross";
import NavBar from "../../components/nav"

function UserLogin() {
    return (
        <>
            <div className="user_auth">
                <div className="card_forms">
                    <div className="text">
                        <div>
                            <h1 className="textVine">Faça seu Login</h1>
                            <Cross link="/" />
                        </div>
                        <hr/>
                    </div>
                    <form>
                        <div className="label_input">
                            <label>
                                Seu Email 
                                <input type="email" required placeholder="Digite seu email" />
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Sua Senha
                                <input type="password" required placeholder="Digite sua senha" />
                            </label>
                        </div>
                    </form>
                    <div className="btn">
                        <Button type="submit" text={"Faça Login"} />
                    </div>
                </div>
            </div>
            <NavBar />
            <footer />
        </>
    );
}

export default UserLogin;