"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError("")
    
    try {
      const response = await fetch('https://api.getwaitlist.com/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          waitlist_id: 29341
        })
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const errorData = await response.json()
        setError(errorData.message || 'submit failed, please try again')
      }
    } catch {
      setError('network error')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="mt-6 text-center text-lovio-charcoal p-4 bg-lovio-blush/50 rounded-lg">
        <p className="flex items-center justify-center">
          Thanks! We&apos;ll keep you posted <Heart className="w-5 h-5 ml-2 text-lovio-lavender fill-lovio-lavender" />
        </p>
      </div>
    )
  }

  if (!showForm) {
    return (
      <Button
        onClick={() => setShowForm(true)}
        size="lg"
        className="mt-8 rounded-full bg-[#7B61FF] text-white hover:bg-[#6B51E6] hover:text-white px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#7B61FF] focus:ring-offset-2 border-2 border-[#7B61FF]"
      >
        Join the Waitlist
      </Button>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md mx-auto space-y-4">
      <Input
        type="email"
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isLoading}
        className="h-12 rounded-lg border-lovio-lavender/30 focus:border-lovio-lavender focus:ring-1 focus:ring-lovio-lavender text-lovio-charcoal placeholder:text-lovio-soft-gray bg-white disabled:opacity-50"
        aria-label="Email address for waitlist"
      />
      {error && (
        <div className="text-red-500 text-sm text-center p-2 bg-red-50 rounded-lg">
          {error}
        </div>
      )}
      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="w-full rounded-full bg-[#7B61FF] text-white hover:bg-[#6B51E6] hover:text-white px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#7B61FF] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#7B61FF]"
      >
        {isLoading ? 'Submitting...' : 'Notify Me'}
      </Button>
    </form>
  )
}
