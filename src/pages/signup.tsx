// src/pages/signup.tsx

import React, { useState } from 'react'
import { supabase } from '../lib/supabaseClient' // Assuming you've already created this client
import { User } from '@supabase/supabase-js' // Import User type

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null) // Type the user state properly

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) throw error

      // Access user from data property
      const signedUpUser = data?.user
      setUser(signedUpUser)

      alert('Signup successful! Please check your email to verify your account.')
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message) // Handle the error correctly
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  return (
    <div>
      <h2>Signup</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignup}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>

      {/* If user is successfully signed up, you can display their details */}
      {user && (
        <div>
          <h3>Welcome, {user.email}</h3>
          {/* You can display other user info here */}
        </div>
      )}
    </div>
  )
}

export default Signup
