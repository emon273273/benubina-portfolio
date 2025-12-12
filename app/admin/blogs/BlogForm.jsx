'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBlog, updateBlog } from './actions'
import { Button } from '@/components/ui/button'
import { Input, Textarea } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function BlogForm({ blog }) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')
    const [coverImage, setCoverImage] = useState(blog?.coverImage || '')
    const [imagePreview, setImagePreview] = useState(blog?.coverImage || '')
    const [isUploading, setIsUploading] = useState(false)

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0]
        if (!file) return

        // Validate file type
        if (!file.type.startsWith('image/')) {
            setError('Please select an image file')
            return
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            setError('Image size must be less than 5MB')
            return
        }

        setIsUploading(true)
        setError('')

        try {
            const formData = new FormData()
            formData.append('file', file)

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()

            if (data.success) {
                setCoverImage(data.url)
                setImagePreview(data.url)
            } else {
                setError(data.error || 'Failed to upload image')
            }
        } catch (err) {
            setError('Failed to upload image')
            console.error(err)
        } finally {
            setIsUploading(false)
        }
    }

    const removeImage = () => {
        setCoverImage('')
        setImagePreview('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        const formData = new FormData(e.target)

        // Add the cover image URL to form data
        if (coverImage) {
            formData.set('coverImage', coverImage)
        }

        try {
            const result = blog
                ? await updateBlog(blog.id, formData)
                : await createBlog(formData)

            if (result.error) {
                setError(result.error)
            } else {
                router.push('/admin/blogs')
                router.refresh()
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>Blog Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {error && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-400 rounded">
                            {error}
                        </div>
                    )}

                    {/* Cover Image Upload */}
                    <div className="space-y-2">
                        <Label htmlFor="coverImageUpload">Cover Image</Label>

                        {imagePreview ? (
                            <div className="relative group">
                                <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                                    <Image
                                        src={imagePreview}
                                        alt="Cover preview"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <Button
                                    type="button"
                                    variant="destructive"
                                    size="sm"
                                    onClick={removeImage}
                                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Remove
                                </Button>
                            </div>
                        ) : (
                            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                                <input
                                    type="file"
                                    id="coverImageUpload"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    disabled={isUploading}
                                />
                                <label
                                    htmlFor="coverImageUpload"
                                    className="cursor-pointer flex flex-col items-center"
                                >
                                    {isUploading ? (
                                        <>
                                            <svg className="animate-spin h-12 w-12 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <p className="text-gray-600 dark:text-gray-400">Uploading...</p>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="h-12 w-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-gray-600 dark:text-gray-400 mb-1">
                                                Click to upload cover image
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                                PNG, JPG, GIF up to 5MB
                                            </p>
                                        </>
                                    )}
                                </label>
                            </div>
                        )}
                        <input type="hidden" name="coverImage" value={coverImage} />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Upload a cover image for your blog post
                        </p>
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                        <Label htmlFor="title">Title *</Label>
                        <Input
                            id="title"
                            name="title"
                            defaultValue={blog?.title}
                            placeholder="Enter blog title..."
                            required
                        />
                    </div>

                    {/* Excerpt */}
                    <div className="space-y-2">
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea
                            id="excerpt"
                            name="excerpt"
                            defaultValue={blog?.excerpt}
                            placeholder="Brief summary of the blog post..."
                            rows={3}
                        />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            A short description that appears in blog listings
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                        <Label htmlFor="content">Content *</Label>
                        <Textarea
                            id="content"
                            name="content"
                            defaultValue={blog?.content}
                            placeholder="Write your blog content here..."
                            rows={12}
                            required
                        />
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                        <Label htmlFor="category">Category *</Label>
                        <Input
                            id="category"
                            name="category"
                            defaultValue={blog?.category}
                            placeholder="e.g., Technology, Design, Business"
                            required
                        />
                    </div>

                    {/* Keywords */}
                    <div className="space-y-2">
                        <Label htmlFor="keywords">Keywords</Label>
                        <Input
                            id="keywords"
                            name="keywords"
                            defaultValue={blog?.keywords?.join(', ')}
                            placeholder="react, nextjs, web development (comma-separated)"
                        />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Enter keywords separated by commas for better searchability
                        </p>
                    </div>



                    {/* Published Status */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="published"
                            name="published"
                            value="true"
                            defaultChecked={blog?.published}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <Label htmlFor="published" className="cursor-pointer">
                            Publish this post immediately
                        </Label>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-4">
                        <Button
                            type="submit"
                            disabled={isSubmitting || isUploading}
                            className="flex-1"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {blog ? 'Updating...' : 'Creating...'}
                                </>
                            ) : (
                                blog ? 'Update Post' : 'Create Post'
                            )}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.push('/admin/blogs')}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </form>
    )
}
