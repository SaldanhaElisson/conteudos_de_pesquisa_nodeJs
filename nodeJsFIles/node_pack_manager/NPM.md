Node pack Manager

__Glossary: Dependencies, Packages, Modules__

- [ ] Verificar se temos o npm instalado `npm -v`
- [ ] Criar nosso próprio pacote `npm init -y`
- [ ] O que é arquivo pack.json
- [ ] Utilizar modulos de terceiros `npm install [nome do modulo]`
- [ ] Utilizar modulos como depedencias de desenvolvimento `npm install [name] -D`
- [ ] Podemos fazer modificação no file.json mas depois precisa atualizar com `npm update`
- [ ] O que é diretório node_modules?
    - Esse directory contém as dependencias dos modulos no projeto
    - Esse directory não é enviado para o git com i file `.gitignore > .node_modules`
- [ ] package-lock.json
    - Ele é responsavel em mapear os modos no projeto
    - É importante não apagar antes de subir para o git
- [ ] Scripts
    - O script se encontra no pack.json
    - Para rodar basta digitar `npm run [nome do scripot]`
    - Existem os `start` que não precisa colocar o run
- [ ] Como mudar de versão dos modulos
    - versão = major.minor.patch
    - patch -> é pra resolver os bugs
    - minor -> diz que ta atualizações mas não vai quebra o pacate
    - o major -> é a versão do projeto e pode quebrar se mudar
    - se tiver `^` no inicio significa que vai atualizar só o patch
    - se viter `*` vai atualizar para ultimar versão
    - se não tiver nada, vai fizar naquela versão
    - `npm outdate` vai mostras as informações dos pacotes
- [ ] Como desinstalar pacote 
    - `npm uninstall [nome do pacote]`
