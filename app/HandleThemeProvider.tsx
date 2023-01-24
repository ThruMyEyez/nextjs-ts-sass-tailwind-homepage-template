'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'

const HandleThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default HandleThemeProvider
