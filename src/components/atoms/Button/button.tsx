import React from 'react'

interface ButtonProps {
  children: string
  className?: string
}

export default function Button({ children, className }: ButtonProps) {
  return <button className={`flex ${className}`}>{children}</button>
}
