import Link from 'next/link'


export function TextLink({
    href,
    children,
  }: {
    href: string
    children: React.ReactNode
  }) {
    return (
        <Link
          href={href}
          target="_blank"
          rel="noopener"
          className="dark:text-purple-300 dark:hover:text-purple-400 text-purple-500 hover:text-purple-600"
      >
        { children }
        </Link>
    )
  }