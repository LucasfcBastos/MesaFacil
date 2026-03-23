import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { api } from "../../services/api";
import "../../styles/components/Forms.css";
import "../../styles/pages/AuthUser.css";
import Cross from "../../components/btn/BtnCross";
import NavBar from "../../components/nav"

function EditRestaurant() {

    const navigate = useNavigate()

    const [name,setName] = useState("")
    const [description,setDescription] = useState("")

    const handleUpdate = async (e) => {

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
                navigate("/restaurante/perfil")
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
                            <h1 className="textVine">Editar Restaurante</h1>
                            <Cross link="/restaurante/perfil" />
                        </div>
                        <hr/>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className="label_input">
                            <label>
                                Nome do Restaurante
                                <input type="text" placeholder="Digite o nome do restaurante" onChange={e=>setName(e.target.value)} />
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Descrição
                                <textarea placeholder="Digite a descrição do restaurante" onChange={e=>setDescription(e.target.value)} />
                            </label>
                        </div>
                        <div className="btn">
                            <button id='navigate' type="submit">
                                <p>Salvar</p>
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

export default EditRestaurant;