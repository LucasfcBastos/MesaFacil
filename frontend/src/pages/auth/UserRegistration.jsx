import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { IMaskInput } from "react-imask"
import "../../styles/components/Forms.css";
import "../../styles/pages/AuthUser.css";
import Cross from "../../components/btn/BtnCross";
import NavBar from "../../components/nav"

function UserRegistration() {

    const navigate = useNavigate()

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone_number,setPhone] = useState("")
    const [social_security_number,setCPF] = useState("")
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

            const cleanCPF = social_security_number.replace(/\D/g, "")
        
            await api.post("/register_authentic",{
                name,
                email,
                phone_number,
                social_security_number: cleanCPF,
                password,
                id_city: selectedCity,
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
                const userLogged = loginResponse.data.user

                const restaurantResponse = await api.post(`/register/${userLogged.id}`)
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
                                <IMaskInput mask="(00) 00000-0000" value={phone_number} required placeholder="(00) 00000-0000" onAccept={(value) => setPhone(value)} />
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Seu CPF *
                                <IMaskInput mask="000.000.000-00" value={social_security_number} required placeholder="000.000.000-00" onAccept={(value) => setCPF(value)} />
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