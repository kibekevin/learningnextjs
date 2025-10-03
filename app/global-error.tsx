// /app/global-error.tsx

'use client'   //error boundaries must be client components

export default function GlobalError({error}:{error: Error & {digest?:String}}) {
    //global-error must include html and body tags
    <html>
        <body>
            Global Error
        </body>
    </html>
}