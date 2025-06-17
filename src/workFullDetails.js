import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function WorkFullDetails() {
  const { id } = useParams(); // Captura o ID da URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const URL = "https://us-west-2.cdn.hygraph.com/content/cm3zv6phf038607wa36zz8nrq/master";
      const query = `
        query GetWorkById {
          work(where: { id: "${id}" }) {
            id
            img {
              url
            }
            descricao
            dataDeInicio
            role {
              html
            }
            tecnologias
            linkDoProjecto
          }
        }
      `;

      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
      });

      const { data } = await res.json();
      setProject(data.work);
    };

    fetchProject();
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <section className="full-details">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p><strong>Início:</strong> {new Date(project.dataDeInicio).toLocaleDateString()}</p>
            <div className="img">
              <img src={project.img.url} alt="projeto" className="img-fluid" />
            </div>
            <p className="descricao">{project.descricao}</p>
          </div>

          <div className="col-md-6">
            <h3 className="heading-color jersey-10-regular">Função</h3>
            <div
              className="p-color"
              dangerouslySetInnerHTML={{ __html: project.role.html }}
            />
            <p className="p-color">
  <strong>Tecnologias:</strong> {project.tecnologias.join(', ')}
</p>

            {project.linkDoProjecto && (
              <a href={project.linkDoProjecto} target="_blank" rel="noopener noreferrer">
                Visitar Projeto
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
