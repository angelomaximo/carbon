const basicThemes = {
  getNavbarBasic(logoSrc = './img/hades.png', brandName = 'brand name', 
  firstItem = 'First item', secondItem = 'Second item', thirdItem = 'Third item', buttonText = 'button') {
      return (`
      <!--NAV BASIC-->
      <nav class="navbar navbar-light navbar-expand-md py-3">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <img class="img-fluid col-sm-1 me-2" src="${logoSrc}">
            <span style="margin-left: 8px;">${brandName}</span>
          </a>
          <button class="navbar-toggler" data-bs-toggler="collapse" data-bs-target="#navcol-2">
            <span class="visually-hidden">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navcol-2" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">${firstItem}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">${secondItem}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">${thirdItem}</a>
              </li>
            </ul>
            <a class="btn btn-primary ms-md-2" role="button" href="#">${buttonText}</a>
          </div>
          
        </div>
      \n</nav>`)
  },
  getHeroBasic(headline, subHeadline, btnTxt1, btnTxt2) {
      return (`
      <!--HERO BASIC-->
      <section style="margin-top: 100px;" class="container">
        <div class="row d-flex justify-content-between">
  
          <div class="col-lg-7">
            <div style="min-width: 450px; max-height: 450px;" class="">
              <h1 style="font-size: clamp(25px, 70px, 100px);">${headline}</h1>
              <p class="pt-1 pb-4 text-secondary">${subHeadline}</p>
              <a class="btn btn-primary pb-3 pt-3 ps-5 pe-5 me-3" role="button">${btnTxt1}</a>
              <a class="btn btn-outline-primary pb-3 pt-3 ps-5 pe-5" role="button">${btnTxt2}</a>
            </div>
          </div>
  
          <div class="col-sm-5 d-flex justify-content-end">
            <div style="max-width: fit-content; max-height: fit-content;" class="col">
              <img style="object-fit: cover; box-shadow: rgba(0, 0, 0, 0.25) 2px 2px 20px;" class="img-fluid rounded-5" src="./img/business-hero.jpg" alt="hero image">
            </div>
          </div>
  
        </div>
      \n</section>`)
  },
  getFeaturesBasic(headline, subHeadline, featureTitle1, featureTxt1, btnTxt1, 
    featureTitle2, featureTxt2, btnTxt2, 
    featureTitle3, featureTxt3, btnTxt3) {
      return (`
      <!--FEATURES BASIC-->
      <section style="margin-top: 200px;" class="text-white bg-dark shadow-lg rounded-circle py-5 mx-2">
        <div class="container">
          
          <div class="row text-center">
            <h1>Features</h1>
            <p>Hades provides all infrastructural features to digitalize your business</p>
          </div>
  
          <br><br>
  
          <div class="row text-center text-dark gap-5">
            <div class="col bg-body rounded-3 p-5">
              <h4>Headline</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis similique</p>
              <br>
              <a class="btn btn-outline-dark px-lg-5">Read more</a>
            </div>
            <div class="col bg-body rounded-3 p-5">
              <h4>Headline</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis similique</p>
              <br>
              <a class="btn btn-outline-dark px-lg-5">Read more</a>
            </div>
            <div class="col bg-body rounded-3 p-5">
              <h4>Headline</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis similique</p>
              <br>
              <a class="btn btn-outline-dark px-lg-5">Read more</a>
            </div>
          </div>  
  
        </div>
      \n</section>`);
  },
  getTestimonialBasic(imgSrc1, person1, job1, txt1,
    imgSrc2, person2, job2, txt2,
    imgSrc3, person3, job3, txt3) {
      return (`
      <!--TESTIMONIALS BASIC-->
      <section style="margin-top: 200px;">
        <div class="container">
        
          <div class="row d-flex gap-4">
  
            <div class="col p-5" style="border-top: 1px solid #212529; border-left: 1px solid #212529; border-radius: 26px 0px;">
              <div class="row">
                <div class="col-sm-3">
                  <img class="img-fluid rounded-5" src="./img/image-kira.jpg">
                </div>
                <div class="col">
                  <h4 style="margin-bottom: 1px;">Kira Bowler</h4>
                  <h5 class="text-secondary fw-normal">BUSINESS OWNER</h5>    
                </div>
              </div>
              
              <div class="row text-center">
                <p style="padding-top: 16px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ullam accusantium aliquam repellendus est blanditiis, provident asperiores, voluptatem nesciunt aperiam quas natus, perspiciatis vel delectus! Ipsum dolorum ullam adipisci impedit.</p>
              </div>
            </div>
  
            <div class="col p-5">
              <div class="row">
                <div class="col-sm-3">
                  <img class="img-fluid rounded-5" src="./img/image-jonathan.jpg">
                </div>
                <div class="col">
                  <h4 style="margin-bottom: 1px;">Jonathan Twain</h4>
                  <h5 class="text-secondary fw-normal">VP OF SALES</h5>    
                </div>
              </div>
              
              <div class="row text-center">
                <p style="padding-top: 16px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ullam accusantium aliquam repellendus est blanditiis, provident asperiores, voluptatem nesciunt aperiam quas natus, perspiciatis vel delectus! Ipsum dolorum ullam adipisci impedit.</p>
              </div>
            </div>
  
            <div class="col p-5" style="border-bottom: 1px solid #212529; border-right: 1px solid #212529; border-radius: 26px 0px;">
              <div class="row">
                <div class="col-sm-3">
                  <img class="img-fluid rounded-5" src="./img/image-daniel.jpg">
                </div>
                <div class="col">
                  <h4 style="margin-bottom: 1px;">Daniel Sanchez</h4>
                  <h5 class="text-secondary fw-normal">ACCENTURE CEO</h5>    
                </div>
              </div>
              
              <div class="row text-center">
                <p style="padding-top: 16px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ullam accusantium aliquam repellendus est blanditiis, provident asperiores, voluptatem nesciunt aperiam quas natus, perspiciatis vel delectus! Ipsum dolorum ullam adipisci impedit.</p>
              </div>
            </div>
  
          </div>  
  
        </div>
      </section>`);
  },
  getCalltoActionBasic(headline, subHeadline, btnTxt) {
      return (`
      <!--CALL TO ACTION BASIC-->
      <section style="margin-top: 200px">
        <div class="container bg-danger shadow-lg text-white rounded-4 p-lg-5">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-lg-7">
              <h1>Start free trial for 30 days.</h1>
              <p>No hidden fees or long-term contract. Start for free and add tools as you need them, or explore our plans to get everything you need at once.</p>  
            </div>
            <div class="col-sm-3 ">
              <a class="btn rounded-5 btn-outline-light px-lg-5 btn-lg" role="button">Start free trial</a>
            </div>
          </div>
        </div>
      \n</section>`);
  },
  getFooterBasic(listName1, linkOne1, linkTwo1, linkThree1,
    listName2, linkOne2, linkTwo2, linkThree2,
    listName3, linkOne3, linkTwo3, linkThree3,
    brandName, brandTxt) {
      return (`
      <!--FOOTER BASIC-->
      <footer style="margin-top: 100px;" class="text-white bg-dark">
        <div class="container py-4 py-lg-5">
          <div class="row justify-content-center">
  
            <div class="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
              <h3 class="fs-6 text-white">Services</h3>
              <ul class="list-unstyled">
                <li>
                  <a class="link-light">Web design</a>
                </li>
                <li>
                  <a class="link-light">Development</a>
                </li>
                <li>
                  <a class="link-light">Hosting</a>
                </li>
              </ul>
            </div>
  
            <div class="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
              <h3 class="fs-6 text-white">About</h3>
              <ul class="list-unstyled">
                <li>
                  <a class="link-light">Company</a>
                </li>
                <li>
                  <a class="link-light">Team</a>
                </li>
                <li>
                  <a class="link-light">Legacy</a>
                </li>
              </ul>
            </div>
  
            <div class="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
              <h3 class="fs-6 text-white">Careers</h3>
              <ul class="list-unstyled">
                <li>
                  <a class="link-light">Job openings</a>
                </li>
                <li>
                  <a class="link-light">Employee success</a>
                </li>
                <li>
                  <a class="link-light">Benefits</a>
                </li>
              </ul>
            </div>
  
            <div class="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
              <h3 class="fs-6 text-danger">Hades Technologies</h3>
              <p class="text-secondary">Sem eleifend donec moles, integer quisque orci aliquam.</p>
            </div>
  
            <hr>
  
            <div class="d-flex justify-content-between align-items-center pt-3">
              <p class="mb-0">Copyright © 2022 Hades</p>
            </div>
  
  
          </div>
        </div>
      \n</footer>`);
  }
}


export { basicThemes }