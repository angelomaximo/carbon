// import { basicThemes } from "./javascript/sectionThemes.js";

const frame = document.getElementById('frame');
const viewBtn = document.getElementById('viewBtn');

viewBtn.addEventListener('click', (e) => {
  console.log(frame);
})

const alertBtn = document.getElementById('alertBtn');
const breadcrumbBtn = document.getElementById('breadcrumbBtn');
const buttonBtn = document.getElementById('buttonBtn');
const navbarBtn = document.getElementById('navbarBtn');
const cardBtn = document.getElementById('cardBtn');
const dropdownBtn = document.getElementById('dropdownBtn');



alertBtn.addEventListener('click', (e) => {
  let x = new Alert('Money rain!!!!');

  frame.innerHTML += x.getAlertPrimary();
})

breadcrumbBtn.addEventListener('click', (e) => {
  let x = bootstrap.components.breadcrumb.getBreadcrumb3();
  frame.innerHTML += x;
})

buttonBtn.addEventListener('click', (e) => {
  let x = bootstrap.components.button.getButtonPrimary('Insira o texto');
  frame.innerHTML += x;
})

navbarBtn.addEventListener('click', (e) => {
  let x = bootstrap.components.navbar.getNavBar();
  frame.innerHTML += x;
})

cardBtn.addEventListener('click', (e) => {
  let x = bootstrap.components.card.getCard('./img/amazon.jpeg', 'Insert Title', 'Insert text', 'Read more');
  frame.innerHTML += x;
})

dropdownBtn.addEventListener('click', (e) => {
  let x = bootstrap.components.dropdown.getDropdown('Dropdown button', 'Option 1', 'Option 2', 'Option 3');
  frame.innerHTML += x;
})


const bootstrap = {
    "components": {
      
      "alert": {//make link color
        getAlertPrimary(text) {
          return (
          `<div class="alert alert-primary" role="alert">
           ${text}\n</div>`
          )
        },
        getAlertSecondary(text) {
          return (
          `<div class="alert alert-secondary" role="alert">
           ${text}\n</div>`
          )
        },
        getAlertSuccess(text) {
          return (
          `<div class="alert alert-success" role="alert">
           ${text}\n</div>`
          )
        },
        getAlertDanger(text) {
          return (
          `<div class="alert alert-danger" role="alert">
           ${text}\n</div>`
          )
        },
        getAlertWarning(text) {
          return (
          `<div class="alert alert-warning" role="alert">
           ${text}\n</div>`
          )
        },
        getAlertInfo(text) {
          return (
          `<div class="alert alert-info" role="alert">
           ${text}\n</div>`
          )
        },
        getAlertLight(text) {
          return (
          `<div class="alert alert-light" role="alert">
           ${text}\n</div>`
          )
        },
        getAlertDark(text) {
          return (
          `<div class="alert alert-dark" role="alert">
           ${text}\n</div>`
          )
        },
      },

      "badge": {//incomplete

      },

      "breadcrumb": {//incomplete
        getBreadcrumb1(link1, link2, link3) {
          return (
            `<nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">Home</li>
            </ol>\n</nav>`
          )
        },
        getBreadcrumb2(link1, link2, link3) {
          return (
            `<nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>\n</nav>`
          )
        },
        getBreadcrumb3(link1, link2, link3) {
          return (
            `<nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>\n</nav>`
          )
        },
      },

      "button": {//incomplete
        getButtonPrimary(text) {
          return (
          `<button type="button" class="btn btn-primary">
          ${text}\n</button>`)
        },
        getButtonSecondary(text) {
          return (
          `<button type="button" class="btn btn-secondary">
          ${text}\n</button>`)
        },
        getButtonSuccess(text) {
          return (
          `<button type="button" class="btn btn-success">
          ${text}\n</button>`)
        },
        getButtonDanger(text) {
          return (
          `<button type="button" class="btn btn-danger">
          ${text}\n</button>`)
        },
        getButtonWarning(text) {
          return (
          `<button type="button" class="btn btn-warning">
          ${text}\n</button>`)
        },
        getButtonInfo(text) {
          return (
          `<button type="button" class="btn btn-info">
          ${text}\n</button>`)
        },
        getButtonLight(text) {
          return (
          `<button type="button" class="btn btn-light">
          ${text}\n</button>`)
        },
        getButtonDark(text) {
          return (
          `<button type="button" class="btn btn-dark">
          ${text}\n</button>`)
        },
        
        // Stopped at outline. To be continued
        getButtonPrimaryOutline(text) {
          return (
          `<button type="button" class="btn btn-outline-primary">
          ${text}\n</button>`)
        },
      },

      "buttonGroup": {//incomplete
        getButtonGroup(text) {

        }
      },

      "card": {//incomplete
        getCard(imgSrc, title, text, buttonText) {
          return (
            `<div class="card" style="width: 18rem;">
            <img src="${imgSrc}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${text}</p>
              <a href="#" class="btn btn-primary">${buttonText}</a>
            </div>
          \n</div>`)
        }
      },

      "carousel": {//incomplete
        getSlide() {
          return (
            `<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="..." class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
              </div>
            </div>
          \n</div>`)
        },

        getSlideControl() {
          return (
            `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          \n</div>`)
        },

        getSlideControlIndicator() {
          return (
            `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          \n</div>`)
        }
      },

      "collapse": {//incomplete
        getCollapse() {
          return (
            `<p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Link with href
            </a>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Button with data-target
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          \n</div>`)
        }
      },

      "dropdown": {//incomplete
        getDropdown(text, text2, text3, text4) {
          return (
            `<div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              ${text}
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">${text2}</a></li>
              <li><a class="dropdown-item" href="#">${text3}</a></li>
              <li><a class="dropdown-item" href="#">${text4}</a></li>
            </ul>
          \n</div>`)
        }
      },

      "form": {//incomplete
        getForm() {
          return (
            `<form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          \n</form>`)
        }
      },

      "inputGroup": {//incomplete

      },

      "jumbotron": {//incomplete
        getJumbotron() {
          return (
            `<div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          \n</div>`)
        }
      },

      "listGroup": {//incomplete
        getListGroup() {
          return (
            `<ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          \n</ul>`)
        }
      },

      "mediaObject": {//incomplete
        getMediaObject() {
          return (
            `<div class="media">
            <img src="..." class="mr-3" alt="...">
            <div class="media-body">
              <h5 class="mt-0">Media heading</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          \n</div>`)
        }
      },

      "modal": {//incomplete

      },

      "navs": {//incomplete
        getNav() {
          return (
            `<ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          \n</ul>`)
        }
      },

      "navbar": {//incomplete
        getNavBar() {
          return (
            `<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          \n</nav>`)
        }
      },

      "pagination": {//incom
        getPagination(href) {
          return (
            `<nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          \n</nav>`)
        }
      },

      "popovers": {//incom

      },

      "progress": {//incomp
        getProgress() {
          return (
            `<div class="progress">
            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          \n</div>`)
        }
      },

      "scrollspy": {

      },
      
      "spinner": {
        getSpinner() {
          return (
            `<div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          \n</div>`)
        }
      },

      "toast": {
        getToast() {
          return (
            `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <img src="..." class="rounded mr-2" alt="...">
              <strong class="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
          \n</div>`)
        }
      },

      "tooltips": {
        
      }
    }

}


class Alert {
  constructor(text) {
    this.text = text;
  }

  getAlertPrimary() {
    return (
      `<div class="alert alert-primary" role="alert">
       ${this.text}\n</div>`
      )
  }
}














const basicThemes = {
  getNavbarBasic(logoSrc = './img/hades.png',brandName = 'brand name', 
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
              <h1 style="font-size: clamp(25px, 70px, 100px);">Digitalize your business with <span class="text-danger">Hades</span></h1>
              <p class="pt-1 pb-4 text-secondary">Millions of brands of all sizes trust Hades to create their tech infrastructure, build customer relationships, and grow their business in-store and online.</p>
              <a class="btn btn-primary pb-3 pt-3 ps-5 pe-5 me-3" role="button">Get started</a>
              <a class="btn btn-outline-primary pb-3 pt-3 ps-5 pe-5" role="button">Contact sales</a>
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
    featureTitle3, featureTxt3, btnTxt3,) {
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

const navbarBasicBtn = document.getElementById('navbarBasicBtn');
const heroBasicBtn = document.getElementById('heroBasicBtn');
const featuresBasicBtn = document.getElementById('featuresBasicBtn');
const testimonialBasicBtn = document.getElementById('testimonialBasicBtn');
const calltoactionBasicBtn = document.getElementById('calltoactionBasicBtn');
const footerBasicBtn = document.getElementById('footerBasicBtn');

navbarBasicBtn.addEventListener('click', (e) => {
  // parameters: 
  // logoSrc, brandName, firstItem, secondItem, thirdItem, buttonText
  let x = basicThemes.getNavbarBasic('./img/maxston-logo.png');
  frame.innerHTML += x;
})

heroBasicBtn.addEventListener('click', (e) => {
  // parameters:
  // 
  let x = basicThemes.getHeroBasic();
  frame.innerHTML += x;
})

featuresBasicBtn.addEventListener('click', (e) => {
  let x = basicThemes.getFeaturesBasic();
  frame.innerHTML += x;
})

testimonialBasicBtn.addEventListener('click', (e) => {
  let x = basicThemes.getTestimonialBasic();
  frame.innerHTML += x;
})

calltoactionBasicBtn.addEventListener('click', (e) => {
  let x = basicThemes.getCalltoActionBasic();
  frame.innerHTML += x;
})

footerBasicBtn.addEventListener('click', (e) => {
  let x = basicThemes.getFooterBasic();
  frame.innerHTML += x;
})