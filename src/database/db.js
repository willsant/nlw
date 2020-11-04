// importar a dependencia do sqlite3 e pedir pra ele mandar msgs no terminal sempre q acontecer alguma coisa
const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto que irá dazer op. no banco de dados, . significa raiz do projeto
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto banco de dados para nossas funções
/*db.serialize(() => {
    db.run(`
       CREATE TABLE IF NOT EXISTS places (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           name TEXT,
           image TEXT,
           address TEXT,
           address2 TEXT,
           state TEXT,
           city TEXT,
           items TEXT
       ); 
    `)

    const query = ` 
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) values (?,?,?,?,?,?,?);
    `
    function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]
    db.run(query, values, afterInsertData)

    //db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
    //    if(err) {
    //        return console.log(err)
    //    }
    //    console.log("Registro deletado com sucesso!")
    //})

    //db.all(`SELECT * FROM places`, function(err, rows) {
    //    if(err) {
    //          return console.log(err)
    //   }
    //   console.log("Aqui estao os seus registros: ")
    //   console.log(rows)
    //})

    antes pra funcionar sem o sevirdor colocamos o live sever

    comandos terminal:
    . crtl + l, limpa
    . .exit, sai do ambiente node
    . crtl + crase, ele abre e fecha o terminal
    . crtl + c , cancela o servidor pelo nodemon


    passo a passo
     .quando ntrar no terminal colocar o git bash. Fechar o terminal e abrir de novo
     . digita no terminal node -v , pra ver a versao do node. Pronto mesma coisa pro npm
     . digitar node no terminal faz eu entrar no ambiente node
     . npm init -y, transforma minha pasta simples em um projeto feito em node
     . npm install express. Instala o express no projeto 
     . node src/serve.js. inicia o servidor na maquina
     . com as config feitas no package.json,  so ir no terminal e digitatr npm start, pra iniciar o servidor
     . npm install nodemon -D. instala o nodemon q fica monitorando as alteraçoes que  acontece no projeto e reinicia o server  sozinho qd estiver desenvlvendo
     . npm install nunjucks . deixa o html dinamico
     . nunjucks template nas extensões do vscode, instalar
     . crtl + shift + p , digita open settings json
        deixar o settigns json assim depois de instalas o vscode-icons:
        {
            "workbench.colorTheme": "Launchbase Theme",
            "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
            "files.associations": {
                "*.html": "njk"
            },
            "emmet.includeLanguages": {
                "njk": "html"
            },
            "vsicons.associations.files": [
                    { "icon": "nunjucks", "extensions": ["html"], "format": "svg" }
                ],
                "workbench.iconTheme": "vscode-icons"
        }   



})*/
