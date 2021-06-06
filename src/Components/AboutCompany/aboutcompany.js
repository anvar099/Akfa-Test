import React from 'react'
import './styles.css'

const AboutCompany = () => {
  return(
    <div className="about-company">
      <div className="about-line">
        Коротко о нас
      </div>
      <div className="vertical">
        <div className="vertical-mode">
          О компании
        </div>
        <div className="vertical-line"></div>
        <div className="heading-row">
          <div className="about-heading">
            Мы работаем для вашей выгоды, кофорта и безопасности
          </div>
          <div className="about-subtitle">
          Всем необходимым оборудованием оснащены все наши промышленные цеха, при помощи которого может быть изготовлена абсолютно любая продукция, которая предназначена для применения в различных сферах промышленного хозяйства.
          </div>
        </div>
      </div>
      <div className="about-line2">
        Наши преимущества
      </div>
    </div>
  )
}
export default AboutCompany;