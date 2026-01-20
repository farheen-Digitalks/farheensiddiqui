import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 w-full 
    bg-[rgb(var(--bg))] 
    border-b border-[rgb(var(--border))] 
    z-50"
    >
      <div className="max-w-6xl mx-auto py-3 px-4 flex justify-end">
        <ThemeToggle />
      </div>
    </nav>
  );
}
