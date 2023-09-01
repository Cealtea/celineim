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
      className="dark:text-purple-300 dark:hover:text-purple-400 text-purple-00 hover:text-purple-600"
    >
      {children}
    </Link>
  )
}



export function ThankYouLink() {
  return (
    <p>
      I hope you liked my post!<br></br>
      Feel free to contact me on <TextLink href={process.env.INSTAGRAM || ""}>Instagram</TextLink>, <TextLink href={process.env.LINKEDIN || ""}>Linkedin</TextLink> or by email <TextLink href={process.env.EMAIL || ""}>contact@celine.im</TextLink> for feedback or comments!
      <br></br>
      <br></br>
      See u in the next one!  
    </p>

  )
}