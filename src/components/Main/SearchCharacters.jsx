import React, { useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.all';
const SearchCharacters = ({ personajes, nameCharacters }) => {
    const [getItemCharacter, setItemCharacter] = useState("");

    const busquedaPersonaje = ({ target }) => {
        const { value } = target;
        setItemCharacter(value);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const inputValue = getItemCharacter.trim().toLowerCase()
        if (inputValue <= 1) {
            Swal.fire(
                "Introduce un nombre",
                "",
                "error"
            )
            return;
        }
        nameCharacters(inputValue)
        setItemCharacter("")
    }
    return (
        <form onSubmit={handleSubmitForm} className="buscador" id="buscador">
            <label htmlFor="buscar"
                className="buscador__label">
                Buscas un personaje?
            </label>
            <input className="buscador__input"
                onChange={busquedaPersonaje}
                placeholder="Introduce el nombre del personaje"
                type="text"
                value={getItemCharacter}
                name="buscar"
            />
            <button type="submit">Buscar</button>
            {personajes.length === 20 ?
                null :
                <>
                    <p className="personajes-length">
                        Personajes encontrados: <span className="personajes-length-active">{personajes.length}</span>
                    </p>
                </>}
        </form>
    )
}

export default SearchCharacters