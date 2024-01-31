// Estrutura da Escola
const escola = {
    alunos: [
      { nome: 'Aluno 1', matricula: '123', cursos: ['Curso A', 'Curso B'] },
      { nome: 'Aluno 2', matricula: '456', cursos: ['Curso B', 'Curso C'] },
      { nome: 'Aluno 3', matricula: '789', cursos: ['Curso A', 'Curso C'] }
    ],
    professores: [
      { nome: 'Professor 1', disciplinas: ['Matemática', 'Física'] },
      { nome: 'Professor 2', disciplinas: ['Português', 'História'] }
    ],
  
    listarAlunosPorCurso: function (curso) {
      const alunosDoCurso = this.alunos.filter(aluno => aluno.cursos.includes(curso));
      console.log(`Alunos do curso ${curso}:`);
      alunosDoCurso.forEach(aluno => {
        console.log(`${aluno.nome} - Matrícula: ${aluno.matricula}`);
      });
    },
  
    listarDisciplinasDoProfessor: function (professorNome) {
      const professor = this.professores.find(professor => professor.nome === professorNome);
      if (professor) {
        console.log(`Disciplinas ministradas pelo professor ${professorNome}: ${professor.disciplinas.join(', ')}`);
      } else {
        console.log(`Professor ${professorNome} não encontrado.`);
      }
    }
  };
  
  // Exemplo de utilização
  escola.listarAlunosPorCurso('Curso A');
  escola.listarDisciplinasDoProfessor('Professor 1');