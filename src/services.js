import { useEffect, useState } from "react";

const URL = "https://us-west-2.cdn.hygraph.com/content/cm3zv6phf038607wa36zz8nrq/master";

const query = `query MyWork {
  services {
    
    heroSectionImage{
      url
    }
    appDesign
    appDesignDescription {
      html
    }
    uiUxDesign
    uiUxDesignDescription {
      html
    }
    webDesign
    webDesignDescription {
      html
    }
    imageOfApp {
      url
    }
    imageOfUiUx {
      url
    }
    imageOfWeb {
      url
    }
  }
}`;

export default function Services() {
  const [services, setServices] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const json = await res.json();
      setServices(json.data.services[0]);
    }
    fetchData();
  }, []);

  function createMarkup(html) {
    return { __html: html };
  }

  if (!services) return <p>Loading...</p>;

  return (
    <>
      <div className="container">
  <div className="row">
    <div className="col-md-12">
      <img src={services.heroSectionImage?.url} className="img-fluid" alt="Hero Section" />
    </div>
  </div>
</div>

      <section className="services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={services.imageOfApp?.url} className="img-fluid" alt={services.appDesign} />
            </div>

            <div className="col-md-6">
              <h2 className="heading-color jersey-10-regular">{services.appDesign}</h2>
              <div className="p-color" dangerouslySetInnerHTML={createMarkup(services.appDesignDescription.html)} />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <h2 className="heading-color jersey-10-regular">{services.uiUxDesign}</h2>
              <div className="p-color" dangerouslySetInnerHTML={createMarkup(services.uiUxDesignDescription.html)} />
            </div>

            <div className="col-md-6">
              <img src={services.imageOfUiUx?.url} className="img-fluid" alt={services.uiUxDesign} />
            </div>

          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={services.imageOfWeb?.url} className="img-fluid" alt={services.webDesign} />
            </div>

            <div className="col-md-6">
              <h2 className="heading-color jersey-10-regular">{services.webDesign}</h2>
              <div className="p-color" dangerouslySetInnerHTML={createMarkup(services.webDesignDescription.html)} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
