// manager card creation 

const generateManager = function (manager) {`
    <div class="container">
        <div class="row justify-content-center container-fluid" id="team-cards">
          <!-- cards -->
          <div class="col-4 mt-4">
            <div class="card h-100">
              <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>
                  <i class="fas fa-mug-hot mr-2"></i> Manager
                </h4>
              </div>

              <div class="card-body">
                <p class="id">${manager.id}</p>
                <p class="email">
                  Email:
                  <a href="mailto:${manager.email}"
                    >jared@fakemail.com</a
                  >
                </p>
                <p class="office">${manager.officeNumber}: 1</p>
              </div>
            </div>
          </div>`
};


const generateEngineer = function (engineer) {`<div class="col-4 mt-4">
<div class="card h-100">
  <div class="card-header">
    <h3>Alec</h3>
    <h4>
      <i class="fas fa-glasses mr-2"></i>
         Engineer
    </h4>
  </div>

  <div class="card-body">
    <p class="id">ID: 2</p>
    <p class="email">
      Email:
      <a href="mailto:alec@fakemail.com">alec@fakemail.com</a>
    </p>
    <p class="github">
      Github:
      <a href="https://github.com/mjtic/" target="_blank">alec</a>
    </p>
  </div>
</div>
</div>`


}