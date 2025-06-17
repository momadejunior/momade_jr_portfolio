import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WorksList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchWorks = async () => {
            const URL = "https://us-west-2.cdn.hygraph.com/content/cm3zv6phf038607wa36zz8nrq/master";
            const query = `
        query MyWork {
          works {
            id
            img {
              url
            }
            descricao
            dataDeInicio
            role
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
            setProjects(data.works);
        };

        fetchWorks();
    }, []);

    return (
        <section className="sections">
            <div className="container mt-collab">
                <h1 className="heading-color jersey-10-regular text-center works">
                    Recent collab work
                </h1>
                <div className="row">
                    {projects.map((work) => (
                        <div className="col-md-4" key={work.id}>
                            <div className="card-post">
                                <div className="icon-desc-post">
                                    <div>
                                        <img
                                            src="https://us-west-2.graphassets.com/cm3zv6ptf0nh907n243tmgohi/cmb6edwpuy2en07lqoytf5qpq"
                                            alt="icon"
                                            className="icon-post"
                                        />
                                    </div>

                                    <div>
                                        {new Date(work.dataDeInicio).getFullYear()} <br />
                                        <span className="jersey-10-regular work-title">{work.role}</span>
                                    </div>
                                </div>
                                <div className="img">
                                    <Link to={`/works/${work.id}`} className="btn-details">

                                        <img src={work.img.url} alt="project" className="img-project" /></Link>
                                </div>
                                <p className="p-color">{work.descricao}</p>

                                {work.linkDoProjecto && (
                                    <a href={work.linkDoProjecto} target="_blank" rel="noopener noreferrer">
                                        Ver projeto
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
