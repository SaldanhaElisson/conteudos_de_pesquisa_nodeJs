# EJS

- Instalar o EJS `npm i EJS`
- Instalar o express para criar o servidor `npm i express`

## O que é EJS?
    EJS -> Embedded JavaSscript templating. Como proprio nome surgere é uma template que permite criar templates html e utilizar javascript. Deixando a front End mais dinâmico, permissão para usar estruturas de reptiçoes e outros recursosdo javascript ligando o front com backEnd Nodejs.

    Possui uma syntx simples e rapida. muito recomendando para quem está iniciando com NodeJs


## Como redenrizar outros arquivos em uma arquivo com EJS?

    Se vocÊ conhece um pouco de algoritmo já deve saber o que são funçoes.
    Eu tenho um trecho do codigo que quero executar variaz vezes mas não quero escrever tudo de novo como no caso a seguir

    **Sem função**

    ```
    console.log("eu quero digita isso")
    console.log("depois isso")
    console.log("mas não quero repetir todas essas 3 linhas pra fazer isso")

    ```

    Então basta eu coloca esses 3 comandos dentro de uma função e toda vez que  quiser executar, declaro essa função

    ```
        função digiteconsole3x (){
            console.log("eu quero digita isso")
            console.log("depois isso")
            console.log("mas não quero repetir todas essas 3 linhas pra fazer isso")

        }

        dititeconsole3x() // vai imprimir as 3 frases uma vez
        digiteconsole3x() // vai imprimir as 3 frases pela segunda vez

    ```

    no EJS podemos fazer algo similiar entretanto com parte do html, como por exemplo uma navbar da pagina.
    

    No exemplo a seguir tenho um trecho de HTML que quero utilizar essa mesma formatação e estilo em todas os meus arquivos, basta utilizar o seguinte
    
    recurso do EJS para chamar em todas as paginas que quero utilizar  escrever  

    ```
        <%- include(caminho da arquivo que quero reutilizar)>

    ```

