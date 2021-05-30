import { useContext, useState, useEffect } from 'react'
import PopupWithForm from './PopupWithForm'

import CurrentUserContext from '../contexts/CurrentUserContext'

function EditProfilePopup({ isOpened, onClose, onUpdateUser }) {
  const user = useContext(CurrentUserContext)

  const [name, setName] = useState()
  const [about, setAbout] = useState()

  useEffect(() => {
    setName(user?.name)
    setAbout(user?.about)
  }, [user])

  function handleChangeName(evt) {
    setName(evt.target.value)
  }

  function handleChangeAbout(evt) {
    setAbout(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()

    onUpdateUser({
      name,
      about,
    })
  }

  return (
    <PopupWithForm
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
    >
      <div className="form__input-field">
        <input
          type="text"
          className="form__text-field"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={handleChangeName}
        />
        <span className="form__input-error" />
      </div>

      <div className="form__input-field">
        <input
          type="text"
          className="form__text-field"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
          value={about}
          onChange={handleChangeAbout}
        />
        <span className="form__input-error" />
      </div>
    </PopupWithForm>
  )
}

export default EditProfilePopup
