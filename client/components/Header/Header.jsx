import Link from "next/link"

const Header = () => {
  return (
    <div className='w-full h-20 bg-blue-300'>
      <ul className='flex justify-center gap-8'>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about/'>
          About
          </Link>
        </li>
        <li>
          <Link href='/signin/' >
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header