import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedPost() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const URL = 'https://us-west-2.cdn.hygraph.com/content/cm3zv6phf038607wa36zz8nrq/master';
      const query = `
        query Blog {
  blogs {
    titulo
    featuredImage {
      url
    }
    
    imagemDeDestaque{
      url
    }
  }
}
      `;

      try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query }),
        });

        const { data } = await response.json();
        if (data.blogs.length > 0) {
          setPost(data.blogs[0]);
        }
      } catch (error) {
        console.error('Erro ao buscar blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  if (!post) return <p>Carregando post em destaque...</p>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div
  className="hero-section-blog"
  style={{ backgroundImage: `url(${post.featuredImage?.url ||'https://us-west-2.graphassets.com/cm3zv6ptf0nh907n243tmgohi/cmc0i7izn3u5a07n8sov6mxo1' })` }}
>
            <div className="content-header">
              <h1 className="heading-color jersey-10-regular">
                {post.titulo}
              </h1>
              <Link to={`/blog/${post.id}`} className='btn-post-read btn-link-to-post'>Ver post</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
