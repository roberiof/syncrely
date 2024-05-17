import React from 'react'

interface ButtonProps {
  children: string
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  className,
  disabled = false,
}: ButtonProps) {
  return (
    <button className={`flex ${className}`} disabled={disabled}>
      {children}
    </button>
  )
}
