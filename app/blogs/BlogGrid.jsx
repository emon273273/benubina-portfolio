'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function BlogGrid({ blogs, pagination }) {
    const searchParams = useSearchParams()

    const createPageUrl = (page) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', page.toString())
        return `/blogs?${params.toString()}`
    }

    if (blogs.length === 0) {
        return (
            <div className="text-center py-16">
                <svg
                    className="mx-auto h-16 w-16 text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No blogs found</h3>
                <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your search or filters
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-8">
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <Card
                        key={blog.id}
                        className="hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                    >
                        {blog.coverImage && (
                            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                                <img
                                    src={blog.coverImage}
                                    alt={blog.title}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        )}
                        <CardHeader className="flex-grow">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                    {blog.category}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            <CardTitle className="text-xl line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {blog.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-3 mt-2">
                                {blog.excerpt || blog.content.substring(0, 150) + '...'}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {blog.keywords.slice(0, 3).map((keyword, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                                    >
                                        #{keyword}
                                    </span>
                                ))}
                            </div>
                            <Link href={`/blogs/${blog.slug}`}>
                                <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                                    Read More
                                    <svg
                                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            {pagination.pages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                    <Button
                        variant="outline"
                        disabled={pagination.currentPage === 1}
                        onClick={() => window.location.href = createPageUrl(pagination.currentPage - 1)}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                    </Button>

                    <div className="flex gap-2">
                        {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => {
                            // Show first page, last page, current page, and pages around current
                            const showPage =
                                page === 1 ||
                                page === pagination.pages ||
                                Math.abs(page - pagination.currentPage) <= 1

                            if (!showPage) {
                                // Show ellipsis
                                if (page === 2 || page === pagination.pages - 1) {
                                    return (
                                        <span key={page} className="px-4 py-2 text-gray-500">
                                            ...
                                        </span>
                                    )
                                }
                                return null
                            }

                            return (
                                <Button
                                    key={page}
                                    variant={page === pagination.currentPage ? 'default' : 'outline'}
                                    onClick={() => window.location.href = createPageUrl(page)}
                                >
                                    {page}
                                </Button>
                            )
                        })}
                    </div>

                    <Button
                        variant="outline"
                        disabled={pagination.currentPage === pagination.pages}
                        onClick={() => window.location.href = createPageUrl(pagination.currentPage + 1)}
                    >
                        Next
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Button>
                </div>
            )}

            {/* Results Info */}
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Showing {blogs.length} of {pagination.total} blog posts
                {pagination.currentPage > 1 && ` (Page ${pagination.currentPage} of ${pagination.pages})`}
            </p>
        </div>
    )
}
