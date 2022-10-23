const basicThemes = {
    getNavbarBasic() {
        return (`
        <nav class="navbar navbar-light navbar-expand-md py-3">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img class="img-fluid col-sm-1 me-2" src="./img/maxston-logo.png">
          <span style="margin-left: 8px;">Brand's name</span>
        </a>
        <button class="navbar-toggler" data-bs-toggler="collapse" data-bs-target="#navcol-2">
          <span class="visually-hidden">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-2" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">First item</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Second item</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Third item</a>
            </li>
          </ul>
          <a class="btn btn-primary ms-md-2" role="button" href="#">Button</a>
        </div>
        
      </div>
    \n</nav>`)
    },
    getHeroBasic() {
        return (`
        `)
    },
    getFeaturesBasic() {
        return (`
        `);
    },
    getTestimonialBasic() {
        return (`
        `);
    },
    getTestimonialBasic() {
        return (`
        `);
    },
    getCalltoActionBasic() {
        return (`
        `);
    },
    getFooterBasic() {
        return (`
        `);
    }
}


export { basicThemes }