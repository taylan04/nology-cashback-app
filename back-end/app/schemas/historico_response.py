from pydantic import BaseModel, ConfigDict
from datetime import datetime

class HistoricoResponse(BaseModel):

    model_config = ConfigDict(from_attributes=True)

    id: int
    tipo_cliente: str
    valor: float
    desconto: float
    cashback: float
    data_criacao: datetime
