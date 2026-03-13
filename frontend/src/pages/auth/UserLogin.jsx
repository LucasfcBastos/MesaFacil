import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { api } from "../../services/api";
import "../../styles/components/Forms.css";
import "../../styles/pages/AuthUser.css";
import Button from "../../components/btn/BtnNavigate";
import Cross from "../../components/btn/BtnCross";
import NavBar from "../../components/nav"

function UserLogin() {

    const navigate = useNavigate()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleRegister = async (e) => {

        e.preventDefault()

        try {

            const loginResponse = await api.post("/login_authentic",{
                email,
                password
            })

            const user = loginResponse.data.user
            const token = loginResponse.data.token

            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))

            alert("Login realizado com sucesso")

            if (user.id_profile === 1) {
                navigate("/client/my")
            } else {
                navigate("/restaurante/my")
            }

        } catch (err) {

            if (err.response) {
                alert(err.response.data.message)
            } else {
                alert("Erro ao conectar com servidor")
            }

        }
    }

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
                    <form onSubmit={handleRegister}>
                        <div className="label_input">
                            <label>
                                Seu email *
                                <input type="email" required placeholder="Digite seu email" onChange={e=>setEmail(e.target.value)} />
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Sua Senha *
                                <input type="password" required placeholder="Digite sua senha" onChange={e=>setPassword(e.target.value)} />
                            </label>
                        </div>
                        <div className="btn">
                            <button id='navigate' type="submit">
                                <p>Faça Login</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <NavBar />
            <footer />
        </>
    );
}

export default UserLogin;