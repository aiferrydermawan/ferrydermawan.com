import Nav from '@/components/Nav'
import './globals.css'
import Footer from '@/components/Footer'
import { Metadata } from 'next';

// export const metadata: Metadata = {
//     icons: {
//         icon: {
//             url: '/favicon-16x16.png',
//             type: 'image/png',
//         },
//     },
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="max-w-3xl mx-auto px-5 lg:px-0">
                <Nav />
                <main className="mt-5">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
