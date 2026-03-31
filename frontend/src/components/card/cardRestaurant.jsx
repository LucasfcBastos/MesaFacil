import { useState, useEffect } from "react";
import { api } from "../../services/api";
import Icon from "../../assets/svg/restaurante.svg?react";

import "../../styles/components/cards.css"

function cardRestaurant({ array }) {

    const [user, setUser] = useState([])
    const [city, setCity] = useState([])
    const [state, setState] = useState([])

    useEffect(() => {
        const loadUser = async () => {
            const response = await api.get(`/where/user/${array.id_user}`)
            setUser(response.data)
        }

        loadUser()
    }, [])


    useEffect(() => {
        const loadCity = async () => {
            if (user?.id_city) {
                try {
                    const response = await api.get(`/where/cities/${user.id_city}`)
                    setCity(response.data)
                } catch (error) {
                    console.error("Erro ao buscar cidade:", error)
                }
            }
        }

        loadCity()
    }, [user])

    useEffect(() => {
        const loadState = async () => {
            if (city?.id_state) {
                try {
                    const response = await api.get(`/where/states/${city.id_state}`)
                    setState(response.data)
                } catch (error) {
                    console.error("Erro ao buscar estado:", error)
                }
            }
        }

        loadState()
    }, [city])

    return (
        <>
            <button className="btn_card">
                <div className="card_start"></div>
                <div className="card_center">
                    <div className="camp_img">
                        {array.logo ? (
                            <img className="preview_logo" src={URL.createObjectURL(logo)} alt="Logo do restaurante" />
                        ) : (
                            <Icon className="preview_logo" />
                        )}
                    </div>
                    <div className="text">
                        <p className="name">{array.restaurant_name}</p>
                        <p>{city.name}<br/>{state.name}</p>
                        <p>Valor da Reserva: R$ {array.price}</p>
                    </div>
                </div>
            </button>
        </>
    );
}

export default cardRestaurant;