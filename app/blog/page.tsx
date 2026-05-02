"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { PageHero } from "@/components/ui/page-hero";

const blogPosts = [
  {
    id: "1",
    slug: "why-nvme-ssd-matters",
    titleEn: "Why NVMe SSD Storage Matters for Your Website",
    titleAr: "لماذا تهم وحدات التخزين NVMe SSD لموقعك",
    excerptEn:
      "Traditional HDD storage is a thing of the past. Learn how NVMe SSD can make your website up to 10x faster.",
    excerptAr:
      "أصبحت وحدات التخزين HDD التقليدية من الماضي. تعرف على كيف يمكن لـ NVMe SSD أن يجعل موقعك أسرع بما يصل إلى 10 أضعاف.",
    category: "Hosting",
    date: "2025-04-15",
    readTime: "5 min",
  },
  {
    id: "2",
    slug: "seo-tips-arabic-websites",
    titleEn: "10 SEO Tips for Arabic Websites in 2025",
    titleAr: "10 نصائح SEO للمواقع العربية في 2025",
    excerptEn:
      "Ranking on Google in Arabic requires a different strategy. Here are our top tips for improving your Arabic website SEO.",
    excerptAr:
      "الترتيب على Google بالعربية يتطلب استراتيجية مختلفة. إليك أهم نصائحنا لتحسين SEO لموقعك العربي.",
    category: "Marketing",
    date: "2025-04-10",
    readTime: "8 min",
  },
  {
    id: "3",
    slug: "mobile-first-design",
    titleEn: "Mobile-First Design: Why It Matters in Egypt",
    titleAr: "التصميم للموبايل أولاً: لماذا هو مهم في مصر",
    excerptEn:
      "With 70% of Egyptian internet users browsing on mobile, your website must be mobile-first. Here's how we approach it.",
    excerptAr:
      "مع 70% من مستخدمي الإنترنت المصريين يتصفحون عبر الموبايل، يجب أن يكون موقعك مصمماً للموبايل أولاً. إليك طريقتنا.",
    category: "Design",
    date: "2025-04-05",
    readTime: "6 min",
  },
  {
    id: "4",
    slug: "ddos-protection-explained",
    titleEn: "DDoS Protection: What Every Business Owner Should Know",
    titleAr: "حماية DDoS: ما يجب أن يعرفه كل صاحب عمل",
    excerptEn:
      "DDoS attacks can take your website offline for hours. Learn how our enterprise-grade protection keeps you safe.",
    excerptAr:
      "هجمات DDoS يمكن أن تجعل موقعك غير متاح لساعات. تعرف على كيف تحافظ حمايتنا المؤسسية على أمانك.",
    category: "Security",
    date: "2025-03-28",
    readTime: "4 min",
  },
  {
    id: "5",
    slug: "wordpress-performance-guide",
    titleEn: "The Ultimate WordPress Performance Guide",
    titleAr: "الدليل الشامل لأداء WordPress",
    excerptEn:
      "WordPress can be slow if not optimized properly. Follow this guide to get your WordPress site loading in under 1 second.",
    excerptAr:
      "يمكن أن يكون WordPress بطيئاً إذا لم يتم تحسينه بشكل صحيح. اتبع هذا الدليل ليتم تحميل موقع WordPress الخاص بك في أقل من ثانية.",
    category: "Tutorials",
    date: "2025-03-20",
    readTime: "12 min",
  },
  {
    id: "6",
    slug: "egypt-ecommerce-2025",
    titleEn: "E-commerce in Egypt: Trends & Opportunities for 2025",
    titleAr: "التجارة الإلكترونية في مصر: الاتجاهات والفرص لعام 2025",
    excerptEn:
      "Egypt's e-commerce market is booming. Here's what you need to know to capitalize on the opportunity.",
    excerptAr:
      "سوق التجارة الإلكترونية في مصر يشهد ازدهاراً. إليك ما تحتاج معرفته للاستفادة من الفرصة.",
    category: "Business",
    date: "2025-03-15",
    readTime: "7 min",
  },
];

const categories = ["All", "Hosting", "Marketing", "Design", "Security", "Tutorials", "Business"];

export default function BlogPage() {
  const { lang, isRTL } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={lang === "ar" ? "أحدث" : "Latest"}
        titleEm={lang === "ar" ? "المقالات" : "Articles"}
        subtitle={
          lang === "ar"
            ? "نصائح وأفكار واتجاهات من فريق Voxylis."
            : "Tips, insights, and trends from the Voxylis team."
        }
      />

      <section className="py-20 px-[6%]">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-[0.72rem] tracking-[0.08em] uppercase py-2 px-4 rounded-full border transition-all ${
                cat === "All"
                  ? "bg-signal text-night border-signal"
                  : "bg-transparent text-muted border-border hover:border-signal hover:text-signal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1080px] mx-auto">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-night2 border border-border rounded-[10px] overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
            >
              {/* Thumbnail placeholder */}
              <div className="h-[160px] bg-gradient-to-br from-signal/10 to-night3 flex items-center justify-center">
                <div className="text-[2rem] font-bold text-signal/20">{post.category}</div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[0.65rem] tracking-[0.12em] uppercase text-signal bg-signal/10 py-1 px-2 rounded">
                    {post.category}
                  </span>
                  <span className="text-[0.7rem] text-muted">{post.readTime}</span>
                </div>

                <h3 className={`text-[1rem] font-bold leading-[1.35] mb-2 ${isRTL ? "text-right" : ""}`}>
                  <Link href={`/blog/${post.slug}`} className="hover:text-signal transition-colors">
                    {lang === "ar" ? post.titleAr : post.titleEn}
                  </Link>
                </h3>

                <p className={`text-[0.8rem] text-muted leading-[1.65] mb-4 line-clamp-3 ${isRTL ? "text-right" : ""}`}>
                  {lang === "ar" ? post.excerptAr : post.excerptEn}
                </p>

                <div className={`flex items-center justify-between text-[0.7rem] text-muted pt-3 border-t border-border ${isRTL ? "flex-row-reverse" : ""}`}>
                  <span>{new Date(post.date).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                  <Link href={`/blog/${post.slug}`} className="text-signal hover:opacity-70 transition-opacity">
                    {lang === "ar" ? "اقرأ المزيد →" : "Read More →"}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
