'use client'

import { useState } from 'react'
import Link from 'next/link'
import { deleteBlog } from './actions'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function BlogList({ blogs }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [filterStatus, setFilterStatus] = useState('all')

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.category.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesFilter = filterStatus === 'all' ||
            (filterStatus === 'published' && blog.published) ||
            (filterStatus === 'draft' && !blog.published)
        return matchesSearch && matchesFilter
    })

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this blog post?')) return

        const result = await deleteBlog(id)
        if (result.error) {
            alert('Error deleting blog: ' + result.error)
        }
        window.location.reload()
    }

    return (
        <div className="space-y-6">
            {/* Search and Filter */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant={filterStatus === 'all' ? 'default' : 'outline'}
                            onClick={() => setFilterStatus('all')}
                        >
                            All
                        </Button>
                        <Button
                            variant={filterStatus === 'published' ? 'default' : 'outline'}
                            onClick={() => setFilterStatus('published')}
                        >
                            Published
                        </Button>
                        <Button
                            variant={filterStatus === 'draft' ? 'default' : 'outline'}
                            onClick={() => setFilterStatus('draft')}
                        >
                            Drafts
                        </Button>
                    </div>
                </div>
            </div>

            {/* Blog Cards */}
            {filteredBlogs.length === 0 ? (
                <Card>
                    <CardContent className="pt-6">
                        <p className="text-center text-gray-500 dark:text-gray-400">No blog posts found.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBlogs.map((blog) => (
                        <Card key={blog.id} className="hover:shadow-lg transition-shadow duration-200">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`px-2 py-1 text-xs rounded-full ${blog.published
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                }`}>
                                                {blog.published ? 'Published' : 'Draft'}
                                            </span>
                                            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                                {blog.category}
                                            </span>
                                        </div>
                                        <CardTitle className="text-lg line-clamp-2">{blog.title}</CardTitle>
                                    </div>
                                </div>
                                <CardDescription className="line-clamp-2 mt-2">
                                    {blog.excerpt || 'No excerpt available'}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {blog.keywords.slice(0, 3).map((keyword, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                    {blog.keywords.length > 3 && (
                                        <span className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                                            +{blog.keywords.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                                    Created: {new Date(blog.createdAt).toLocaleDateString()}
                                </div>

                                <div className="flex gap-2">
                                    <Link href={`/admin/blogs/edit/${blog.id}`} className="flex-1">
                                        <Button variant="outline" size="sm" className="w-full">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => handleDelete(blog.id)}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
