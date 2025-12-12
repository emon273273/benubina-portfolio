'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function BlogFilters({ categories, keywords, currentSearch, currentCategory, currentKeyword }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [searchInput, setSearchInput] = useState(currentSearch)

    const updateFilter = (key, value) => {
        const params = new URLSearchParams(searchParams.toString())
        if (value) {
            params.set(key, value)
        } else {
            params.delete(key)
        }
        params.delete('page') // Reset to page 1 when filtering
        router.push(`/blogs?${params.toString()}`)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        updateFilter('search', searchInput)
    }

    const clearFilters = () => {
        setSearchInput('')
        router.push('/blogs')
    }

    const hasActiveFilters = currentSearch || currentCategory || currentKeyword

    return (
        <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Search blogs..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="pl-12 pr-4 py-3 text-lg"
                    />
                    <svg
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </form>

            {/* Category Filter */}
            {categories.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={currentCategory === cat ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => updateFilter('category', currentCategory === cat ? '' : cat)}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>
            )}

            {/* Keywords Filter */}
            {keywords.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                        {keywords.slice(0, 20).map((keyword) => (
                            <Button
                                key={keyword}
                                variant={currentKeyword === keyword ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => updateFilter('keyword', currentKeyword === keyword ? '' : keyword)}
                            >
                                #{keyword}
                            </Button>
                        ))}
                    </div>
                </div>
            )}

            {/* Active Filters & Clear */}
            {hasActiveFilters && (
                <div className="flex items-center justify-center gap-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {currentSearch && `Search: "${currentSearch}"`}
                        {currentCategory && ` • Category: ${currentCategory}`}
                        {currentKeyword && ` • Keyword: #${currentKeyword}`}
                    </p>
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                        Clear all filters
                    </Button>
                </div>
            )}
        </div>
    )
}
