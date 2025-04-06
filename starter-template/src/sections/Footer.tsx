import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerlinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vanshika-duggal13/',
  },
  {
    title: 'Github',
    href: 'https://github.com/Vanshikaduggal',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/_itz._.vd13/',
  },
  {
    title: 'Leetcode',
    href: 'https://leetcode.com/u/vanshikaduggal13/',
  },
]

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip"> {/* Changed -z-10 to z-10 */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />

      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>

          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerlinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
