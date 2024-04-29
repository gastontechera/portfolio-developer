import React from 'react';
import './Projects.css';
import ecommerce from '../../assets/images/projects/e-commerce.jpg';
import acorde from '../../assets/images/projects/acorde.jpg';

function Projects() {
    return (
        <div id='projects'>
            <h2 className='text-center text-color pt-5'>Projects</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4 mx-5 mt-3 mb-5">
                <div className="col text-decoration-none d-flex justify-content-center">
                    <div className="project-img mx-0 text-light" style={{ maxWidth: '250px' }}>
                        <a href="https://gastontechera.github.io/e-commerce/" target='black' className="text-decoration-none d-flex justify-content-center">
                            <img src={ecommerce} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body p-0 mt-2">
                            <h5 className="card-title">E-Commerce <br />
                                Jap 2023</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col text-decoration-none d-flex justify-content-center">
                    <div className="project-img mx-0 text-light" style={{ maxWidth: '250px' }} >
                        <a href="https://acordeproducciones.netlify.app/" target='black' className="text-decoration-none d-flex justify-content-center">
                            <img src={acorde} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body p-0 m-2">
                            <h5 className="card-title">Acorde
                                Producciones</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
