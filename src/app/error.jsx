'use client'

export default function Error({ error, reset }) {
    return (
        <div className="py-8 space-y-3">
            <h2 className="text-lg md:text-xl font-semibold">Something went wrong!</h2>
            <button className="bg-primary px-3 py-1 font-semibold" onClick={() => reset()}>Try again</button>
        </div>
    )
}