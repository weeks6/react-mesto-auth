import React from 'react'
import Popup from './Popup'

import SuccessImage from "../images/success.svg"
import FailureImage from "../images/failure.svg"

function InfoTooltip({
  success,
  name,
  isOpened,
  onClose
}) {
  return (
    <Popup
      isOpened={isOpened}
      name={name}
      onClose={onClose}
    >
      <div className="infotooltip">

        {success ? (
          <>
            <img
              src={SuccessImage}
              alt="Успех"
              className="infotooltip__image"
            />
            <p className="infotooltip__text">Вы успешно зарегистрировались!</p>
          </>
        ) : (
          <>
            <img
              src={FailureImage}
              alt="Ошибка"
              className="infotooltip__image"
            />
            <p className="infotooltip__text">Что-то пошло не так!
              Попробуйте ещё раз.</p>

          </>
        )}
      </div>
    </Popup>
  )
}

export default InfoTooltip
