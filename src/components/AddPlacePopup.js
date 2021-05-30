import { useState, useRef } from 'react'

import PopupWithForm from "./PopupWithForm"


export default function AddPlacePopup({ isOpened, onClose, onAddPlace }) {

  const [title, setTitle] = useState()
  const [titleErrorMessage, setTitleErrorMessage] = useState('')
  const titleRef = useRef('')
  const [link, setLink] = useState()
  const [linkErrorMessage, setLinkErrorMessage] = useState('')
  const linkRef = useRef('')

  function handleChangeTitle(evt) {
    setTitle(evt.target.value)
    setTitleErrorMessage(titleRef.current.validationMessage)
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value)
    setLinkErrorMessage(linkRef.current.validationMessage)
  }

  function handleSubmit(evt) {
    evt.preventDefault()

    onAddPlace({
      title,
      link
    })
  }

  return (
    <PopupWithForm
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="add"
      title="Новое место"
      buttonText="Создать"
    >
      <div className="form__input-field">
        <input
          type="text"
          className="form__text-field"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          ref={titleRef}
          value={title}
          onChange={handleChangeTitle}
        />
        <span className="form__input-error">{titleErrorMessage}</span>
      </div>

      <div className="form__input-field">
        <input
          type="url"
          className="form__text-field"
          placeholder="Ссылка на картинку"
          required
          ref={linkRef}
          value={link}
          onChange={handleChangeLink}
        />
        <span className="form__input-error">{linkErrorMessage}</span>
      </div>
    </PopupWithForm>
  )
}
