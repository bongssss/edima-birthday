import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './lib/supabaseClient' // Ensure correct import
import { User } from '@supabase/supabase-js' // Import correct type for User
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'

function App() {
  const [user, setUser] = useState<User | null>(null) // Set correct type for user
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      console.log('Session on load:', session) // Debugging log
      setUser(session?.user ?? null)
      setLoading(false)
    }

    fetchSession()

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state change:', event, session) // Debugging log
      setUser(session?.user ?? null)
    })

    // Cleanup listener on unmount
    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [])

  if (loading) {
    return <div>Loading...</div> // You can change this to a loading spinner or whatever UI you prefer
  }

  return (
    <Router>
      <Routes>
        {/* Login Page Route */}
        <Route
          path="/login"
          element={user ? <Navigate to="/home" /> : <Login />}
        />
        {/* Signup Page Route */}
        <Route
          path="/signup"
          element={user ? <Navigate to="/home" /> : <Signup />}
        />
        {/* Home Page Route */}
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        {/* Redirect to Home or Login based on user's authentication state */}
        <Route path="/" element={<Navigate to={user ? '/home' : '/login'} />} />
      </Routes>
    </Router>
  )
}

export default App
