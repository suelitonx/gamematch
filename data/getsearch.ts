'use client'

import { useSearchParams } from "next/navigation"

export function GetSearch() {
    const searchParams = useSearchParams()
    const search = searchParams.get('ordenar')
    return search
}