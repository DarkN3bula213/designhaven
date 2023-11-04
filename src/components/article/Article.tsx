import { formatDate } from "@/utils/formatDate";
import { Card } from "../shared/Card";

interface Article {
    title: string
    description: string
    author: string
    date: string
  }
  

export function Article({ article }: { article: Article }) {
    return (
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <Card className="md:col-span-3">
          <Card.Title >
            {article.title}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={article.date}
            className="md:hidden"
            decorate
          >
            {formatDate(article.date)}
          </Card.Eyebrow>
          <Card.Description>{article.description}</Card.Description>
          <Card.Cta>Read article</Card.Cta>
        </Card>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="mt-1 hidden md:block"
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
      </article>
    )
  }