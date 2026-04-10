from pydantic import BaseModel
from datetime import datetime

class HistoricoResponse(BaseModel):
    tipo_cliente: str
    valor: float
    desconto: float
    cashback: float
    data_criacao: datetime
