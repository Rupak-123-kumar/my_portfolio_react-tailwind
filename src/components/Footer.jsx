export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full bg-gray-900 text-white
                 shadow-[0_-2px_8px_rgba(0,0,0,0.4)] z-50
                 flex items-center justify-center gap-6 text-xs"
      style={{ height: "20px" }}
    >
      <span>© 2025 Rupak Kumar</span>

      <a href="https://github.com/Rupak-123-kumar" className="hover:text-blue-400">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/rupak-kumar-1b2a212ab/" className="hover:text-blue-400">
        LinkedIn
      </a>
      <a href="https://www.instagram.com/rupak_ishwar?igsh=ZW1jcDZvcTcxNzhx" className="hover:text-blue-400">
        Instagram
      </a>
    </footer>
  );
}
