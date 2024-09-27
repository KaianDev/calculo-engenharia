export const Footer = () => {
  return (
    <footer>
      <p className="text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} - Facilitador <br />
        Desenvolvido por{" "}
        <a
          href="https://github.com/kaiandev"
          target="_blank"
          className="hover:underline hover:text-zinc-900"
          rel="noreferrer">
          Kaian Vasconcelos
        </a>
      </p>
    </footer>
  )
}
