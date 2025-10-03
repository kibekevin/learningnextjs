// /app/global-error.tsx

'use client'   //error boundaries must be client components

export default function GlobalError({error}:{error: Error & {digest?:string}}) {
    //global-error must include html and body tags
    <html>
        <body>
            Global Error
            <h2>Error {error.message}</h2>
        </body>
    </html>
}