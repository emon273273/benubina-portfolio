'use client'

import { ThemeProvider } from '@/components/providers/ThemeProvider'

export default function LoginLayout({ children }) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}
