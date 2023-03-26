import { NavLink as Link } from "react-router-dom";

export  function Header() {
  return (
    <nav className=" bg-orange-400 flex justify-center gap-4 p-4 text-orange-100 text-lg">
      <Link to="/" className="hover:text-orange-300">Home</Link>
      <Link to="/about" className="hover:text-orange-300">About</Link>
      <Link to="/contact" className="hover:text-orange-300">Contact</Link>
    </nav>
  )
}
