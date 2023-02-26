import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { HiArrowSmRight } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function ContactCard() {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="d-flex flex-column justify-content-center text-dark"
        style={{ gap: "30px", flexWrap: "wrap" }}
      >
        <div>
          <div className="card shadow p-3">
            <div className="card-body text-center">
              <BsWhatsapp size="25" />
              <h5 className="card-title text-center mb-4 mt-3">WhatsApp</h5>
              <p>3455850034</p>
              <a
                style={{ color: "black" }}
                href="whatsapp://send?phone=+393455850034"
                target="_blank"
                rel="noreferrer"
              >
                {t("writeMe")} <HiArrowSmRight />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="card shadow p-3">
            <div className="card-body text-center">
              <MdOutlineEmail size="25" />
              <h5 className="card-title text-center mb-4 mt-3">Email</h5>
              <p>angelo.derosa95@gmail.com</p>
              <a
                style={{ color: "black" }}
                href="mailto:angelo.derosa95@gmail.com"
              >
                {t("writeMe")} <HiArrowSmRight />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="card shadow p-3">
            <div className="card-body text-center">
              <AiOutlineMessage size="25" />
              <h5 className="card-title text-center mb-4 mt-3">Messanger</h5>
              <p>angelo.derosa95</p>
              <a
                style={{ color: "black" }}
                href="https://m.me/angelo.derosa95"
                target="_blank"
                rel="noreferrer"
              >
                {t("writeMe")} <HiArrowSmRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
