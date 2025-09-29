export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 mt-16">
      <div className="container mx-auto px-4 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Jacob Rafal</p>
        <nav className="flex gap-4">
          <a href="https://github.com/JakeCob" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jacob-matthew-rafal-b94399217/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:rafaljacobmatthew@gmail.com">Email</a>
          <a href="https://calendly.com/rafaljacobmatthew/30min" target="_blank" rel="noreferrer">Calendly</a>
          <a href="/rss.xml">RSS</a>
        </nav>
      </div>
    </footer>
  );
}



