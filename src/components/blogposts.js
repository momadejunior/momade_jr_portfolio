import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // <-- import Link

export default function BlogPost() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const URL = "https://us-west-2.cdn.hygraph.com/content/cm3zv6phf038607wa36zz8nrq/master";
      const query = `
        query Blog {
          blogs {
            id
            titulo
            imagemDeDestaque {
              url
            }
            excerpt
            createdAt
          }
        }
      `;

      try {
        const res = await fetch(URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });
        const json = await res.json();
        setBlogs(json.data.blogs);
      } catch (error) {
        console.error("Erro ao buscar os posts:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>

      <div className="container">
        <h1 className="heading-color jersey-10-regular text-center blog-section">UIBLOG</h1>
        <div className="row">
          {blogs.map((post) => (
            <div key={post.id} className="col-md-4">
              <div className="blog-column">
                <div className="icon-desc-post">
                  <div>
                    {new Date(post.createdAt).toLocaleDateString("pt-PT", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                    <br />
                    <span className="title-blog-card">{post.titulo}</span>
                  </div>
                </div>
                <div className="img">
                  <img
                    src={post.imagemDeDestaque?.url || "placeholder.png"}
                    alt={post.titulo}
                    className="img-project"
                  />
                </div>
                <div className="p-color">{post.excerpt}</div>

                {/* Link to blog post details page */}
                <li>
                  <Link to={`/blog/${post.id}`}>Ver post</Link>
                </li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
