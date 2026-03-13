import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { IMaskInput } from "react-imask"
import "../../styles/components/Forms.css";
import "../../styles/pages/AuthUser.css";
import Button from "../../components/btn/BtnNavigate";
import Cross from "../../components/btn/BtnCross";
import NavBar from "../../components/nav"

function UserRegistration() {

    const navigate = useNavigate()

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [number_contact,setPhone] = useState("")
    const [cpf,setCPF] = useState("")
    const [password,setPassword] = useState("")
    const [selectedState, setSelectedState] = useState("")
    const [selectedCity, setSelectedCity] = useState("")
    const [selectedProfile, setSelectedProfile] = useState("")

    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [profile, setProfile] = useState([])

    useEffect(() => {
        const loadStates = async () => {
            const response = await api.get("/states")
            setStates(response.data)
        }

        loadStates()
    }, [])

    useEffect(() => {
        const loadProfile = async () => {
            const response = await api.get("/profiles")
            setProfile(response.data)
        }

        loadProfile()
    }, [])

    const handleStateChange = async (e) => {
        const stateId = e.target.value
        setSelectedState(stateId)

        const response = await api.get(`/cities/${stateId}`)

        setCities(response.data)
    }

    const handleRegister = async (e) => {

        e.preventDefault()

        try {
        
            await api.post("/register_authentic",{
                name,
                email,
                number_contact,
                cpf,
                password,
                id_cities: selectedCity,
                id_profile: selectedProfile
            })
       
            const loginResponse = await api.post("/login_authentic",{
                email,
                password
            })

            localStorage.setItem("token", loginResponse.data.token)
            localStorage.setItem("user", JSON.stringify(loginResponse.data.user))

            alert("Usuário criado")
        
            if (Number(selectedProfile) === 1) {
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
                            <h1 className="textVine">Crie sua Conta</h1>
                            <Cross link="/" />
                        </div>
                        <hr/>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="label_input">
                            <label>
                                Seu nome *
                                <input type="text" required placeholder="Digite seu nome" onChange={e=>setName(e.target.value)} />
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Seu email *
                                <input type="email" required placeholder="Digite seu email" onChange={e=>setEmail(e.target.value)} />
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Seu celular *
                                <IMaskInput mask="(00) 00000-0000" value={number_contact} required placeholder="(00) 00000-0000" onAccept={(value) => setPhone(value)} />
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Seu CPF *
                                <IMaskInput mask="000.000.000-00" value={cpf} required placeholder="000.000.000-00" onAccept={(value) => setCPF(value)} />
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Você é de qual estado?
                                <select value={selectedState} onChange={handleStateChange}>
                                    <option value="">Selecione um estado</option>

                                    {states.map((state) => (
                                        <option key={state.id} value={state.id}>
                                        {state.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Você é de qual cidade? *
                                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>

                                    <option value="">Selecione uma cidade</option>

                                    {cities.map((city) => (
                                        <option key={city.id} value={city.id}>
                                        {city.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Sua Senha *
                                <input type="password" required placeholder="Digite sua senha" onChange={e=>setPassword(e.target.value)} />
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Tipo de usuario *
                                <select value={selectedProfile} onChange={(e) => setSelectedProfile(e.target.value)}>
                                    <option value="">Selecione seu perfil</option>
                                    {profile.map((profile) => (
                                        <option key={profile.id} value={profile.id}>
                                            {profile.type}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="btn">
                            <button id='navigate' type="submit">
                                <p>Vamos Cadastrar</p>
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

export default UserRegistration;