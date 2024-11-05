// 1. Criação da collection `biblioteca`:
db.createCollection("biblioteca")

// 2. Inserção de um documento na collection utilizando `insertOne`:
db.biblioteca.insertOne({
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano_publicacao: 1954,
    genero: "Fantasia",
    disponivel: true
})

// 3. Inserção de múltiplos documentos utilizando `insertMany`:
db.biblioteca.insertMany([
    {
      titulo: "1984",
      autor: "George Orwell",
      ano_publicacao: 1949,
      genero: "Distopia",
      disponivel: true
    },
    {
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      ano_publicacao: 1943,
      genero: "Infantil",
      disponivel: false
    }
])

// 4. Consultas com `find`:
//Encontrar todos os livros disponíveis:
db.biblioteca.find({disponivel: true})

//Encontrar livros publicados antes de 1950:
db.biblioteca.find({ano_publicacao: {$lt: 1950}})

//Encontrar todos os livros do gênero "Fantasia":
db.biblioteca.find({genero: "Fantasia"})

// 5. Atualizar a disponibilidade de "O Pequeno Príncipe" para `true`:
db.biblioteca.updateOne(
    {titulo: "O Pequeno Príncipe"},
    {$set: {disponivel: true}}
  )
