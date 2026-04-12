import emailIcon from "../../assets/contact-icons/email.svg";
import phoneIcon from "../../assets/contact-icons/phone.svg";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="contact__title">Información de contacto</h2>

      <ul className="contact__info-list">
        <li>
          <a
            href="mailto:zahidtejedaamaro.dev@gmail.com"
            className="contact__item"
          >
            <img src={emailIcon} alt="Email" className="contact__icon" />
            <span className="contact__info">
              zahidtejedaamaro.dev@gmail.com
            </span>
          </a>
        </li>

        <li>
          <a href="tel:+529994994048" className="contact__item">
            <img src={phoneIcon} alt="Teléfono" className="contact__icon" />
            <span className="contact__info">+52 99 9499 4048</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
