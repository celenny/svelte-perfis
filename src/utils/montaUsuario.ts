import type IRepositorio from "../interfaces/IRepositorio";
import type IUsuario from "../interfaces/IUsuario";

export default function montaUsuario(dataUser: any, dataRepos: any): IUsuario {
    const repositorios_recentes = dataRepos.map((repositorio) => {
        return {
            nome: repositorio.name,
            url: repositorio.html_url,
        } as IRepositorio;
    });

    return {
        avatar_url: dataUser.avatar_url,
        login: dataUser.login,
        nome: dataUser.name,
        perfil_url: dataUser.html_url,
        repositorios_publicos: dataUser.public_repos,
        seguidores: dataUser.followers,
        repositorios_recentes
    };
}