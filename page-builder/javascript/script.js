const frame = document.getElementById('frame');
const alertBtn = document.getElementById('alertBtn');

alertBtn.addEventListener('click', (e) => {
  let x = bootstrap.components.alert.getAlertPrimary('Hello World');
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
        getDropdown() {
          return (
            `<div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
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

