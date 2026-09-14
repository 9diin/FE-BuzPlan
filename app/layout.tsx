import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { AppHeader } from '@/components/common'
import { Tabs } from '@/components/ui'
import { cn } from '@/lib/utils'

const paperlogy = localFont({
    src: [
        {
            path: '../public/fonts/Paperlogy-1Thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../public/fonts/Paperlogy-2ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../public/fonts/Paperlogy-3Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/Paperlogy-4Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Paperlogy-5Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/Paperlogy-6SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/Paperlogy-7Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/Paperlogy-8ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../public/fonts/Paperlogy-9Black.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-sans',
    display: 'swap',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko" suppressHydrationWarning className={cn('antialiased', paperlogy.variable, 'font-sans')}>
            <body>
                <ThemeProvider defaultTheme="dark">
                    <div className="flex h-screen w-full flex-col gap-4 overflow-hidden p-4">
                        <Tabs defaultValue="overview" className="flex h-full w-full flex-col gap-4">
                            <AppHeader />
                            <main className="flex min-h-0 w-full flex-1">{children}</main>
                        </Tabs>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
