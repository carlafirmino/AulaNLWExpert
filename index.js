const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento do DOM pelo seu ID.",
        "Seleciona um elemento do DOM pelo seu nome.",
        "Seleciona um elemento do DOM pelo seletor CSS.",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara dois valores sem considerar o tipo.",
        "Compara dois valores e considera o tipo.",
        "Atribui um valor a uma variável.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função anônima em JavaScript?",
      respostas: [
        "Uma função sem nome atribuído.",
        "Uma função sem corpo.",
        "Uma função que retorna undefined.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de linha.",
        "/* Este é um comentário de linha. */",
        "/* Este é um comentário de bloco. */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método de array é usado para adicionar um elemento ao final do array?",
      respostas: [
        "push()",
        "append()",
        "insert()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão 'typeof []' em JavaScript?",
      respostas: [
        "'object'",
        "'array'",
        "'array-like'",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'map()' faz em um array em JavaScript?",
      respostas: [
        "Itera sobre cada elemento do array e modifica-o.",
        "Itera sobre cada elemento do array e retorna um novo array com base em uma função de callback.",
        "Remove elementos específicos do array com base em uma condição.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++) {}",
        "for (var i = 0; i < 5; i++) {}",
        "for (let i = 0; i < 5; i++) {}",
      ],
      correta: 2
    },
  ];
  
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
  
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
    for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
      
      for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
  
          corretas.delete(item)
          if(estaCorreta) {
            corretas.add(item)
          }
  
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
  
        quizItem.querySelector('dl').appendChild(dt)
      }
  
    quizItem.querySelector('dl dt').remove()
  
      quiz.appendChild(quizItem)
    }