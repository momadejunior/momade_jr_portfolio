import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL = "https://us-west-2.cdn.hygraph.com/content/cm3zv6phf038607wa36zz8nrq/master";

export default function FullBlogPostDetails() {
  const { id } = useParams(); // Obtém o ID dos parâmetros da rota
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    // Consulta GraphQL com variável para o ID do blog
    const query = `
      query BlogDetails($id: ID!) {
        blogs(where: { id: $id }) {
          id
          titulo
          imagemDeDestaque {
            url
          }
          descricaoDoArtigo {
            html
          }
          createdAt
        }
      }
    `;

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { id },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setError(data.errors[0].message);
          setLoading(false);
          return;
        }
        // O array blogs deve conter um item, pois filtramos por ID
        setBlog(data.data.blogs[0] || null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!blog) return <div>Artigo não encontrado.</div>;

  return (
    <div className="container">
      <div className="row">

        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div>
            <div className="icon-desc-post">
              <div>
                {new Date(blog.createdAt).toLocaleDateString("pt-PT", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
                <br />
                <h1 className="heading-color jersey-10-regular">{blog.titulo}</h1>
              </div>
            </div>
            <div className="img h-img-blog">
              <img
                src={blog.imagemDeDestaque?.url || "placeholder.png"}
                alt={blog.titulo}
                className="img-project"
              />
            </div>
            <div
              className="p-color"
              dangerouslySetInnerHTML={{ __html: blog.descricaoDoArtigo?.html || "" }}
            />
          </div>
        </div>

        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
