import { getBlogBySlug } from '../../admin/blogs/actions'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function BlogPostPage({ params }) {
    const blog = await getBlogBySlug(params.slug)

    if (!blog || !blog.published) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link href="/blogs">
                    <Button variant="ghost" className="mb-8">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blogs
                    </Button>
                </Link>

                {/* Cover Image */}
                {blog.coverImage && (
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
                        <img
                            src={blog.coverImage}
                            alt={blog.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}

                {/* Header */}
                <header className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                            {blog.category}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                            {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>

                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {blog.title}
                    </h1>

                    {blog.excerpt && (
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            {blog.excerpt}
                        </p>
                    )}

                    {/* Author */}
                    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                            {blog.author.name?.[0] || blog.author.email[0].toUpperCase()}
                        </div>
                        <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                                {blog.author.name || 'Admin'}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {blog.author.email}
                            </p>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <div className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 leading-relaxed">
                        {blog.content}
                    </div>
                </div>

                {/* Keywords */}
                {blog.keywords.length > 0 && (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {blog.keywords.map((keyword, idx) => (
                                <Link
                                    key={idx}
                                    href={`/blogs?keyword=${encodeURIComponent(keyword)}`}
                                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                                >
                                    #{keyword}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Share/Related */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center shadow-xl">
                    <h3 className="text-2xl font-bold mb-2">Enjoyed this article?</h3>
                    <p className="mb-6 opacity-90">Check out more of our blog posts</p>
                    <Link href="/blogs">
                        <Button variant="secondary" size="lg">
                            Browse All Posts
                        </Button>
                    </Link>
                </div>
            </article>
        </div>
    )
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const blog = await getBlogBySlug(params.slug)

    if (!blog) {
        return {
            title: 'Blog Not Found'
        }
    }

    return {
        title: blog.title,
        description: blog.excerpt || blog.content.substring(0, 160),
        keywords: blog.keywords.join(', '),
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: blog.coverImage ? [blog.coverImage] : [],
        },
    }
}
