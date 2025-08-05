import logo from "../../components/img/flux-logo.png"
import { color } from "chart.js/helpers"
import { Link } from "react-router-dom"
export default function Home() {

    return (
        <>
        <header style={{
    position: 'relative',
    backgroundColor: '#343a40',
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    paddingTop: '8rem',
    paddingBottom: '8rem',
  }}>
            <div className=" position-relative" >
                <div className="col-12 justify-content-center">
                        <div className="text-center text-black">
                            <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                        </div>
                </div>
            </div>
        </header>
        <section className="p-5">
                    <div class="container">
                    <div class="row text-center">
                        <div class="col-md-4 mb-4">
                        <div class="border rounded p-4 h-100">
                            <div class="mb-3">
                            <span class="fs-1 text-primary">&#9881;</span>
                            </div>
                            <h4>Feature 1</h4>
                            <p>descrição do produto.</p>
                        </div>
                        </div>
                        <div class="col-md-4 mb-4">
                        <div class="border rounded p-4 h-100">
                            <div class="mb-3">
                            <span class="fs-1 text-success">&#128640;</span>
                            </div>
                            <h4>Feature 2</h4>
                            <p>alguma coisa pra vender o bagulho.</p>
                        </div>
                        </div>
                        <div class="col-md-4 mb-4" style={{backgroundImage: "url('../img/Teste.png')"}}>
                        <div class="border rounded p-4 h-100">
                            <div class="mb-3">
                            <span class="fs-1 text-danger">&#128161;</span>
                            </div>
                            <h4>Feature 3</h4>
                            <p>alguma outra coisa.</p>
                        </div>
                        </div>
                    </div>
                    </div>
        </section>

        <section className="showcase">
            <div className="container-fluid py-5">
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" backgroundImage="assets/img/bg-showcase-1.jpg" style={{backgroundImage: "url('assets/img/bg-showcase-1.jpg')"}} ></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Fully Responsive Design</h2>
                        <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 text-white showcase-img" style={{backgroundImage: "url('assets/img/bg-showcase-2.jpg')"}} ></div>
                    <div className="col-lg-6 my-auto showcase-text">
                        <h2>Updated For Bootstrap 5</h2>
                        <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url('assets/img/bg-showcase-3.jpg')"}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Easy to Use & Customize</h2>
                        <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="testimonials text-center bg-light p-5">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-1.jpg" alt="..." />
                            <h5>Margaret E.</h5>
                            <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-2.jpg" alt="..." />
                            <h5>Fred S.</h5>
                            <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-3.jpg" alt="..." />
                            <h5>Sarah W.</h5>
                            <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <footer class="bg-dark text-light py-4 mt-auto">
            <div class="container text-center">
            <p class="mb-0">&copy; 2025 Flux ERP. All rights reserved.</p>
            </div>
        </footer>
        </>
    )
}
    