function buscaUsuario(nomeUsuario: string) {
    return fetch(
        `https://api.github.com/users/${nomeUsuario}`
    );
}

function buscaRepositorios(nomeUsuario: string) {
    return fetch(
        `https://api.github.com/users/${nomeUsuario}/repos?sort=created&per_page=5`
    );
}


export { buscaUsuario, buscaRepositorios };