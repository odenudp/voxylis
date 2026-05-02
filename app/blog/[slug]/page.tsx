import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <article className="py-20 px-[6%]">
      <div className="max-w-[720px] mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[0.8rem] text-muted hover:text-signal transition-colors mb-8"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Blog
        </Link>

        <div className="text-[0.65rem] tracking-[0.12em] uppercase text-signal bg-signal/10 py-1 px-3 rounded inline-block mb-4">
          Article
        </div>

        <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-[-0.03em] leading-[1.15] mb-4">
          {slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h1>

        <div className="flex items-center gap-4 text-[0.78rem] text-muted mb-8 pb-6 border-b border-border">
          <span>April 15, 2025</span>
          <span>5 min read</span>
        </div>

        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-[0.95rem] text-muted leading-[1.85] mb-5">
            This is a placeholder for the full blog article content. In a real implementation, this would be loaded
            from a CMS or database and rendered with proper formatting.
          </p>

          <h2 className="text-[1.3rem] font-bold mt-8 mb-3">Introduction</h2>
          <p className="text-[0.95rem] text-muted leading-[1.85] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <h2 className="text-[1.3rem] font-bold mt-8 mb-3">Key Points</h2>
          <ul className="list-disc pl-5 text-[0.95rem] text-muted leading-[1.85] mb-5 space-y-2">
            <li>Point one about the topic at hand</li>
            <li>Another important consideration</li>
            <li>Technical details and implementation</li>
            <li>Best practices and recommendations</li>
          </ul>

          <h2 className="text-[1.3rem] font-bold mt-8 mb-3">Conclusion</h2>
          <p className="text-[0.95rem] text-muted leading-[1.85] mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-[0.9rem] font-bold mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/seo-tips-arabic-websites"
              className="bg-night2 border border-border rounded-lg p-4 hover:border-signal/30 transition-colors"
            >
              <div className="text-[0.88rem] font-semibold mb-1">10 SEO Tips for Arabic Websites</div>
              <div className="text-[0.75rem] text-muted">Marketing · 8 min read</div>
            </Link>
            <Link
              href="/blog/mobile-first-design"
              className="bg-night2 border border-border rounded-lg p-4 hover:border-signal/30 transition-colors"
            >
              <div className="text-[0.88rem] font-semibold mb-1">Mobile-First Design: Why It Matters</div>
              <div className="text-[0.75rem] text-muted">Design · 6 min read</div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
