export const Header = () => {
  return (
    <div className="fixed top-3 z-10 left-1/2 transform -translate-x-1/2">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item hover:text-black">Home</a>
        <a href="#" className="nav-item hover:text-black">Projects</a>
        <a href="#" className="nav-item hover:text-black">About</a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  );
};
