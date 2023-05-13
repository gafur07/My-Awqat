import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.scss"

const Notfound = () => {
  return (
    <>
    
      <section class="page_404">
        <div class="container">
          <div class="row_404">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Page not found!</h3>

                  <p>Please back to Home!</p>

                  <Link to="/" class="link_404 rounded-md text-white">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notfound;
