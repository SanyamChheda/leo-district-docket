'use client'

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-pinkAccent/20 blur-3xl" />
      <div className="absolute right-0 top-32 h-60 w-60 rounded-full bg-goldAccent/20 blur-3xl" />
      <div className="absolute left-1/2 top-[35%] h-96 w-96 -translate-x-1/2 rounded-full bg-royalPurple/10 blur-3xl" />
    </div>
  )
}

export default AnimatedBackground
