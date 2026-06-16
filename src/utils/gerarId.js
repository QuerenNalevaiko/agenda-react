export function gerarId() {
  return Date.now() + Math.random();
}

export const compromissosIniciais = [
  {
    id: gerarId(),
    titulo: "Reunião de equipe",
    data: "2025-01-20",
    hora: "09:00",
    descricao: "Discussão sobre o planejamento",
    categoria: "trabalho",
    concluido: false,
  },
  {
    id: gerarId(),
    titulo: "Consulta médica",
    data: "2025-01-21",
    hora: "14:30",
    descricao: "Check-up anual",
    categoria: "saude",
    concluido: true,
  },
  {
    id: gerarId(),
    titulo: "Aniversário da Ana",
    data: "2025-01-25",
    hora: "19:00",
    descricao: "Festa no restaurante",
    categoria: "pessoal",
    concluido: false,
  },
  {
    id: gerarId(),
    titulo: "Entrega do relatório",
    data: "2025-01-22",
    hora: "17:00",
    descricao: "Relatório trimestral",
    categoria: "trabalho",
    concluido: false,
  },
  {
    id: gerarId(),
    titulo: "Aula de yoga",
    data: "2025-01-23",
    hora: "07:00",
    descricao: "Aula matinal",
    categoria: "saude",
    concluido: false,
  },
];
