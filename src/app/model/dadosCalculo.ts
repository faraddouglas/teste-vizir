export interface Origem {
  nome: string,
  valor: string
}

export interface Destino {
  nome: string,
  valor: string
}

export interface Tempo {
  nome: string,
  valor: number
}

export interface Plano {
  nome: string,
  valor: number
}

export interface Total {
  totalSemPlano: number,
  totalComPlano: number,
  valorPlano: number
}
