const url = import.meta.env.VITE_API_URL || "http://localhost:8000"

export async function calcularCashback(dados) {
  try {
    const response = await fetch(`${url}/cashback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    })

    if (!response.ok) {
      throw new Error("Erro ao calcular cashback")
    }

    return await response.json()

  } catch (error) {
    console.error(error)
    return null
  }
}

export async function buscarHistorico() {
  try {
    const response = await fetch(`${url}/historico`)

    if (!response.ok) {
      throw new Error("Erro ao buscar histórico")
    }

    return await response.json()

  } catch (error) {
    console.error(error)
    return []
  }
}