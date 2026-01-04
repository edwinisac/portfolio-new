import "./header.css";
export function Header() {
  return (
    <>
      <div className="header">
        <ul className="menu-items ">
          <li className="link"><a href="#home">Home</a></li>
          <li className="link"><a href="#skills">Skills</a></li>
          <li className="link"><a href="#projects">Projects</a></li>
          <li className="link"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
}
