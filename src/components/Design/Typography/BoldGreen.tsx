import React from 'react'

export default function BoldGreen({ children } : { children: any }) {
  return (
    <span className="font-bold text-green">{ children }</span>
  )
}
