import Navbar from './components/navbar';
import BlogPost from './components/blogposts';
import Works from './components/collab';
import Typed from 'typed.js';
import React from 'react';


export default function Home(){


     const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['UI/UX DESIGNER'],
      typeSpeed: 50,
       
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);



    return(
        <>
     <div className="container hero-section-container">
      <div className="row align-items-center mb-5 hero-section">
        <div className="col-md-6">
          <img 
            src="https://us-west-2.graphassets.com/cm3zv6ptf0nh907n243tmgohi/cmbgho0twnulw07n8vls9i4ee" 
            alt="spaceship" 
            className="img-fluid name-hero"
          />
          <p className="p-color subtitle" ref={el}/>
         
          <h5 className="p-color year-of-works">Maputo 2022</h5>
        </div>

        <div className="col-md-2">
        </div>

        <div className="col-md-4 image-hero-section-character">
          <img 
            src="https://us-west-2.graphassets.com/cm3zv6ptf0nh907n243tmgohi/cmbhq6jhero6807lkkpfljtf0" 
            alt="spaceship" 
            className="img-fluid"
          />
        </div>
      </div>


<section className='about-section'>
<div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="heading-color jersey-10-regular">Webdesigner Construído<br/> do Zero</h1>
          <p className="p-color">
            Momade Júnior é um designer gráfico e desenvolvedor web autodidata Moçambicano com 7 anos de experiência. Ele se dedica ao desenvolvimento de fluxogramas, mapas de sites e ao design de interfaces para web e aplicativos que proporcionam uma excelente experiência ao usuário por meio da navegabilidade do site, organização das informações, uso de cores, imagens, vídeos e arquitetura geral da informação.
          </p>
        </div>

        <div className='col-md-2'>

        </div>
        <div className="col-md-4">
          <img 
            src="https://us-west-2.graphassets.com/cm3zv6ptf0nh907n243tmgohi/cmb6dedg9xvcf07my2xhk61bh" 
            alt="spaceship" 
            className="img-fluid fireball"
          />
        </div>
      </div>
</section>
     

    </div>

    <div className='container'>
      <div className='row'>
      
          <div className="col-md-4 mission-character">
          <img 
            src="https://us-west-2.graphassets.com/cm3zv6ptf0nh907n243tmgohi/cmb6duvujxzgc07my2p1uowh7" 
            alt="spaceship" 
            className="img-fluid mission-img"
          />
          </div>

          <div className='col-md-1'>

          </div>
          <div className="col-md-7">
          <h1 className="heading-color jersey-10-regular mission-headline">Mission</h1>
            <div class="skills">
              <div className='list-skills'>
                <div>2020</div>
                <div>Web Designer - Anima estudio criativo</div>
             
              </div>
              <div className='list-skills'>
                <div>2019</div>
                <div>Graphic Designer - Puzzle Sticker</div>
              </div>
              <div className='list-skills'>
                <div>2018</div>
                <div>Graphic Designer and Social Media Manager - Brainstorming Academy</div>
              </div>
              <div className='list-skills'>
                <div>2017</div>
                <div>Design Graphic</div>
              </div>
            </div>
          </div>
      </div>
    </div>


<Works/>
<BlogPost/>


        </>
    );
}