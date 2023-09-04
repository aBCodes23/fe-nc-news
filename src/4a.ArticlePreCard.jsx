const ArticlePreCard = ({articles}) => {
  return articles.map((article) => {
    return (
      <li className="ArticlePreCard"key={article.article_id}>
        <img
            className="ArticlePreCardImage"
          src={article.article_img_url}
          alt={`Picture related to ${article.title}`}
        />
        <h2>{article.title}</h2>
        <p>by {article.author}</p>
        <p>topic: {article.topic}</p>
      </li>
    );
  });
};

export default ArticlePreCard;
