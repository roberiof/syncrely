import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  className,
  disabled = false,
}: ButtonProps) {
  return (
    <button className={`flex font-medium ${className}`} disabled={disabled}>
      {children}
    </button>
  )
}
