import "../../style/ContactDetails.css";

interface Props {
  icon?: string;
  text: string;
}

function ContactDetails({ icon, text }: Props) {
  return (
    <div className="contact-details">
      {icon ? <img src={icon} alt="icon" /> : null}
    </div>
  );
}

export default ContactDetails;
