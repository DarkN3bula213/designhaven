import { Article } from "@/components/article/Article";
import { SimpleLayout } from "@/components/layout/SimpleLayout";
const dummyArticles = [
    {
        author: 'Nadir',
      slug: 'custom-furniture-design-trends',
      title: 'Custom Furniture Design Trends of 2023',
      date: '2023-11-01',
      description: 'Explore the cutting-edge trends in custom furniture that blend modern aesthetics with functionality. Discover how personalized pieces can transform your living space.'
    },
    {
        author: 'Nadir',
      slug: 'creating-your-corporate-space',
      title: 'Creating Your Corporate Space: A Guide to Design and Branding',
      date: '2023-11-02',
      description: 'Learn how to infuse your brand’s personality into your workplace design. This guide provides valuable insights for creating a corporate space that resonates with your company’s ethos.'
    }
  ];
  
export default  function ArticlesIndex() {

  
    return (
      <SimpleLayout
        title="Writing on software design, company building, and the aerospace industry."
        intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {dummyArticles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    )
  }
  