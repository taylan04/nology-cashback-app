from pydantic import BaseModel

class CashbackRequest(BaseModel):
    valor: float
    desconto: float
    tipo_cliente: str