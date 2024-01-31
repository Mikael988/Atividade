// Estrutura da Biblioteca
const biblioteca = {
    livrosDisponiveis: [{ titulo: 'Livro 1', autor: 'Autor 1', disponivel: true },
                        { titulo: 'Livro 2', autor: 'Autor 2', disponivel: true },
                        { titulo: 'Livro 3', autor: 'Autor 3', disponivel: true }
    ],
    alunosMatriculados: [{ nome: 'Aluno 1', matricula: '123', livrosEmprestados: [] },
                         { nome: 'Aluno 2', matricula: '456', livrosEmprestados: [] },
                         { nome: 'Aluno 3', matricula: '789', livrosEmprestados: [] }
    ],
  
    emprestarLivro: function (livroIndex, alunoMatricula) {
      if (this.livrosDisponiveis[livroIndex] && this.alunosMatriculados.find(aluno => aluno.matricula === alunoMatricula)) {
        if (this.livrosDisponiveis[livroIndex].disponivel) {
          this.livrosDisponiveis[livroIndex].disponivel = false;
          this.alunosMatriculados.find(aluno => aluno.matricula === alunoMatricula).livrosEmprestados.push(this.livrosDisponiveis[livroIndex]);
          console.log(`Livro emprestado com sucesso para o aluno de matrícula ${alunoMatricula}.`);
        } else {
          console.log('Livro indisponível no momento.');
        }
      } else {
        console.log('Livro ou aluno não encontrado.');
      }
    },
  
    exibirLivrosDisponiveis: function () {
      console.log('Livros Disponíveis:');
      this.livrosDisponiveis.forEach((livro, index) => {
        console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} (${livro.disponivel ? 'Disponível' : 'Indisponível'})`);
      });
    }
  };
  
  // Exemplo de utilização
  biblioteca.exibirLivrosDisponiveis();
  biblioteca.emprestarLivro(0, '123');
  biblioteca.exibirLivrosDisponiveis();