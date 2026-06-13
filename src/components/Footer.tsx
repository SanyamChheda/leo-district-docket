'use client'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">Leo District 3231 A2</p>
          <p>Passion Ignites Purpose</p>
        </div>

        <div className="flex flex-wrap gap-4 text-slate-400">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=leodistrict3231a2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="Email Leo District"
          >
            Email
          </a>
          <a
            href="https://www.instagram.com/leodistrict3231a2?igsh=cTQwbGJ0ZHBjbXRw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/leodistrict3231-a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-slate-500">Designed for District Docket · © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
