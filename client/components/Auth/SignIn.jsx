import React from 'react'
import Link from 'next/link'
import SignUp from './SignUp'

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-64">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 border border-gray-300 rounded" required />
            <p><Link href="/signup/">dont have an account no worries sighn up by clicking</Link></p>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn