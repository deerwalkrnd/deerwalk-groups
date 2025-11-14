import "./style.css";


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <!-- ====================================Screen Starts Here====================================  -->

    <main id="home-screen">
      <!-- ====================================hero section outer background====================================  -->
      <section class="home-screen_container">
        <!-- ====================================HERO SECTION INNER CONTAINER BLOCK====================================  -->

        <div id="particles-js" class="large-block">
          <!-- =================NAV -->
          <nav>
            <img
              class="dwit-logo"
              src="../assets/images/logo/dwit-logo-white.png"
              alt="company logo"
            />
          </nav>

          <!-- =================Testimonial Division (Section With Different Chief Head Testimonials) -->

          <div class="testimonial-division">
            <!--  top most upper container containing first & only one testimonial card  -->
            <div class="upper-division">
              <!-- our testimonial card starts here -->
              <div class="testimonial animate__animated animate__fadeInUp">
                <div class="avatar">
                  <img
                    class="testimonial-image"
                    src="../assets/images/avatar/rudra_sir.png"
                    alt="avatar"
                  />
                </div>
                <p class="helvetica">Chairperson Emeritus / Founder</p>
                <strong class="roboto-500">Rudra Pandey</strong>
              </div>
              <!-- our testimonial card ends here -->
            </div>

            <!--  middle container containing second & only one testimonial card  -->
            <div class="middle-division">
              <!-- our testimonial card starts here -->
              <div class="testimonial animate__animated animate__fadeInUp">
                <div class="avatar">
                  <img
                    class="testimonial-image"
                    src="../assets/images/avatar/hitesh_karki_Sir.jpg"
                    alt="avatar"
                  />
                </div>
                <p class="helvetica">Chairperson</p>
                <strong class="roboto-500">Hitesh Karki</strong>
              </div>
              <!-- our testimonial card ends here -->
            </div>



            <!--  lowest container containing second & only one testimonial card  -->
            <div class="lower-division">
              <!-- our testimonial card starts here -->

              <div class="testimonial animate__animated animate__fadeInUp">
                <div class="avatar">
                  <img
                    class="testimonial-image"
                    src="../assets/images/avatar/nizu-dahal.png"
                    alt="avatar"
                  />
                </div>
                <p class="helvetica finance">Director of Administration</p>
                <strong class="roboto-500">Nizu Dahal</strong>
              </div>

              <!-- Hariram Khadka -->
              <div class="testimonial animate__animated animate__fadeInUp">
                <div class="avatar">
                  <img
                    class="testimonial-image"
                    src="../assets/images/avatar/pooja-neupane.png"
                    alt="avatar"
                  />
                </div>
                <p class="helvetica finance">Director of Finance</p>
                <strong class="roboto-500">Pooja Neupane</strong>
              </div>

              <!-- our testimonial card starts here -->
              
              <!-- our testimonial card ends here -->

              <!-- NEW TEAM MEMBERS START HERE -->

             

              <!-- Alisha Thapa Magar -->
             
              <!-- our testimonial card ends here -->

              <!-- our testimonial card ends here -->
            </div>
          </div>

          <!-- <div class="description-division">
            <p class="roboto-300">
              Deerwalk Institute of Technology is a private college established
              in 2010 in collaboration between Nepalese entrepreneurs and the
              United States-based software company, Deerwalk Inc. It is an
              affiliation to Tribhuvan University, which is the oldest
            </p>
          </div> -->
        </div>
      </section>

      <!-- 3 Card Container stats here  -->
      <section class="featured-class_container">
        <!--  featured card block starts here -->
        <div class="featured-card-block">
          <section>
            <!-- 1st featured card starts here  -->
            <a
              class="text-decoration-none featured-cards"
              href="https://deerwalk.edu.np/DWIT/"
              target="_blank"
            >
              <div>
                <img src="../assets/icons/dwit-no-text.png" alt="deerwalk icon" />
              </div>
              <h2 class="inter-700 featured-border--blue">
                Deerwalk Institute of Technology
              </h2>
            </a>

            <!-- 2nd featured card starts here  -->
            <a
              href="https://deerwalk.edu.np/sifalschool"
              target="_blank"
              class="text-decoration-none featured-cards"
            >
              <div>
                <img src="../assets/icons/dwit-no-text.png" alt="deerwalk icon" />
              </div>

              <h2 class="inter-700 featured-border--orange">
                Deerwalk Sifal School
              </h2>
            </a>

            <!-- 3rd featured card starts here  -->
            <a
              class="text-decoration-none featured-cards"
              href="https://deerwalk.edu.np/dhading-school"
              target="_blank"
            >
              <div>
                <img src="../assets/icons/dwit-no-text.png" alt="deerwalk icon" />
              </div>
              <h2 class="inter-700 featured-border--lightblue">
                Deerwalk Dhading School
              </h2>
            </a>

            <!-- 4th featured card starts here  -->
            <a
              href="https://deerwalk.edu.np/pokhara-school"
              target="_blank"
              class="text-decoration-none featured-cards"
            >
              <div>
                <img src="../assets/icons/dwit-no-text.png" alt="deerwalk icon" />
              </div>
              <h2 class="inter-700 featured-border--jungle-green">
                Deerwalk Pokhara School
              </h2>
            </a>

            <!-- 5th featured card starts here  -->
            <a
              href="https://dbs.deerwalk.edu.np/"
              target="_blank"
              class="text-decoration-none featured-cards"
            >
              <div>
                <img src="../assets/icons/dwit-no-text.png" alt="deerwalk icon" />
              </div>
              <h2 class="inter-700 featured-border--savoy-blue">
                Deerwalk Bharatpur School
              </h2>
            </a>

            <!-- 6th featured card starts here  -->
            <a
              href="https://deerwalktrainingcenter.com/"
              target="_blank"
              class="text-decoration-none featured-cards"
            >
              <div>
                <img src="../assets/icons/dwit-no-text.png" alt="deerwalk icon" />
              </div>
              <h2 class="inter-700 featured-border--cyan">Deerwalk Compware</h2>
            </a>
          </section>
        </div>
      </section>
    </main>

    <!-- =====================================footer starts here  -->
    <footer class="primary-footer inter-700">Sifal, Kathmandu, Nepal</footer>
`;