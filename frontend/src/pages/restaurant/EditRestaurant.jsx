import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import "../../styles/components/Forms.css";
import "../../styles/pages/AuthUser.css";
import Cross from "../../components/btn/BtnCross";
import NavBar from "../../components/nav"
import Icon from "../../assets/svg/restaurante.svg?react";

function EditRestaurant() {

    const navigate = useNavigate()

    const [logo, setLogo] = useState(null);
    const [restaurant_name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [id_cuisine, setCuisineId] = useState("")
    const [price, setPrice] = useState("")

    const [cuisines, setCuisines] = useState([])
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        const loadRestaurant = async () => {
            const response = await api.get(`/exibir/${user.id}`)
            const data = response.data

            setRestaurant(data)

            // 🔥 PREENCHE OS INPUTS
            setName(data.restaurant_name || "")
            setDescription(data.description || "")
            setPrice(data.price || "")
            setCuisineId(data.id_cuisine || "")
        }

        loadRestaurant()
    }, [])

    useEffect(() => {
        const loadCuisines = async () => {
            const response = await api.get("/cuisines")
            setCuisines(response.data)
        }

        loadCuisines()
    }, [])

    const user = JSON.parse(localStorage.getItem("user"))

    const handleUpdate = async (e) => {

        e.preventDefault()

        try {
            const formData = new FormData();

            formData.append("_method", "PUT");

            if (logo) {
                formData.append("logo", logo);
            }

            formData.append("restaurant_name", restaurant_name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("id_cuisine", id_cuisine);

            await api.post(`/atualizar/${user.id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            alert("Atualização realizada com sucesso!");
            navigate("/restaurante/perfil");
            
        } catch (err) {
            console.error(err);

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
                            <label className="img">
                                Logo do Restaurante
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            setLogo(file);
                                        }
                                    }}
                                />
                                <div className="img_camp">
                                    {logo ? (
                                        <img className="preview_logo" src={URL.createObjectURL(logo)} alt="Logo do restaurante" />
                                    ) : (
                                        <Icon className="preview_logo" />
                                    )}
                                </div>
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Nome do Restaurante
                                <input type="text" value={restaurant_name} placeholder="Digite o nome do restaurante" onChange={e=>setName(e.target.value)} />
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Descrição
                                <textarea value={description} placeholder="Digite a descrição do restaurante" onChange={e=>setDescription(e.target.value)} />
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Qual seu tipo de refeição?
                                <select value={id_cuisine || ""} onChange={e=>setCuisineId(e.target.value)}>
                                    <option value="">Selecione um tipo de refeição</option>

                                    {cuisines.map((cuisine) => (
                                        <option key={cuisine.id} value={cuisine.id}>
                                        {cuisine.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="label_input">
                            <label>
                                Preço da reserva
                                <input value={price} type="text" placeholder="Digite o preço da reserva" onChange={e=>setPrice(e.target.value)} />
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