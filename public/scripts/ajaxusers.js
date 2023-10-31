fetch('/getUsers')
    .then(response => response.json())
    .then(users => {
        const userDataDiv = document.getElementById('user-data');
        const userList = users.map(user => {
            return `
<div class="col-sm-6 mt-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${user.nome_usuario}</h5>
      <p class="card-text">
        Id: ${user.id_usuario} <br>
        Senha: ${user.senha_usuario}
      </p>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal-${user.id_usuario}" data-bs-whatever="${user.nome_usuario}">Modificar ${user.nome_usuario}</button>
      <div class="modal fade" id="exampleModal-${user.id_usuario}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modificar ${user.nome_usuario}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="/usuarios" method="post">
            <div class="modal-body">
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">ID:</label>
                    <input class="form-control" name="id" type="number" placeholder="Disabled input" aria-label="Disabled input example" value="${user.id_usuario}" disabled>
                    </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Nome:</label>
                  <input type="text" name="nome" class="form-control" id="recipient-name" value="${user.nome_usuario}">
                </div>
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Senha:</label>
                    <input type="text" name="senha" class="form-control" id="recipient-name" value="${user.senha_usuario}">
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <input type="submit" class="btn btn-primary" value="Modificar">
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            `;
        });
        userDataDiv.innerHTML = userList.join('');
    })
    .catch(error => {
        console.error('Erro ao buscar dados do servidor', error);
    });