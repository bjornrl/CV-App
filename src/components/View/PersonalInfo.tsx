import "../../style/PersonalInfo.css";
import ContactDetails from "./ContactDetails";

interface Props {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
}

function PersonalInfo({ name, title, phone, email, location }: Props) {
  return (
    <header>
      <div>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div>
        <ContactDetails text={phone} />
        <ContactDetails text={email} />
        <ContactDetails text={location} />
      </div>
    </header>
  );
}

export default PersonalInfo;
