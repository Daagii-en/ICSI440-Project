import "./header.css";
import logo from "./logo1.jpg";
export default function Header() {
  return (
    <div className="containers">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <p>Бидний тухай</p>
        <p>Эхлэх</p>
        <p>Нэвтрэх</p>
        <button>Бүртгүүлэх</button>
      </div>
    </div>
  );
}
