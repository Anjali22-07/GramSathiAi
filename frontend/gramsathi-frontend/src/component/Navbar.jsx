function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-green-950">
          🌾 GramSathi AI
        </h1>

        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          About
        </button>

      </div>
    </nav>
  );
}

export default Navbar;