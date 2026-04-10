def calcular_cashback(valor, desconto, tipo_cliente):
    
    valor_final = valor * (1 - desconto / 100)

    cashback_base = valor_final * 0.05

    if tipo_cliente == "VIP":
        cashback_base += cashback_base * 0.10

    if valor_final > 500:
        cashback_base *= 2

    return round(cashback_base, 2)