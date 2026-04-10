const url = "http://localhost:8000"

export async function calcularCashback(dados) {
  const response = await fetch(`${url}/cashback`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(dados)
  })

  return response.json()
}

export async function buscarHistorico() {
  const response = await fetch(`${url}/historico`)
  return response.json()
}