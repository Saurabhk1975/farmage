import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <>
      <div className="bg-red-600 text-white text-center py-2 text-sm font-semibold">
        Farmage store is live  —  currently connect via Email and Mobile.
      </div>
      <header className="bg-white/70 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link to='/' className="font-extrabold text-2xl text-darkgreen">FARMAGE</Link>
          <nav className="flex gap-4 items-center text-sm">
            <Link to="/" className="hover:text-darkgreen">Home</Link>
            <Link to="/products" className="hover:text-darkgreen">Products</Link>
            <Link to="/about" className="hover:text-darkgreen">About</Link>
            <Link to="/contact" className="hover:text-darkgreen">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  )
}
