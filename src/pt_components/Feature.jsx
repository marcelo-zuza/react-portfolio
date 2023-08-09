import React from 'react'
import featured1 from "../assets/img/featured-1.png"
import featured2 from "../assets/img/featured-2.png"
import featured3 from "../assets/img/featured-3.png"
import featured4 from "../assets/img/featured-4.png"


const Feature = () => {
  return (
    <div  className='container'>

<section id="featured" className="featured">
      <div className="container">

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <figure>
                  <img src={featured1} alt="featured1" className="img-fluid" />
                </figure>
              </div>
              <div className="tab-pane" id="tab-2">
                <figure>
                  <img src={featured2} alt="featured2" className="img-fluid" />
                </figure>
              </div>
              <div className="tab-pane" id="tab-3">
                <figure>
                  <img src={featured3} alt="featured3" className="img-fluid" />
                </figure>
              </div>
              <div className="tab-pane" id="tab-4">
                <figure>
                  <img src={featured4} alt="featured4" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                  <h4>Modi sit est</h4>
                  <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                  <h4>Unde praesentium sed</h4>
                  <p>Voluptas vel esse repudiandae quo excepturi.</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                  <h4>Pariatur explicabo vel</h4>
                  <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                  <h4>Nostrum qui quasi</h4>
                  <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Feature