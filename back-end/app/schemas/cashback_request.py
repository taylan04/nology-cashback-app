from typing import Literal
from pydantic import BaseModel, Field

class CashbackRequest(BaseModel):
    valor: float = Field(gt=0)
    desconto: float = Field(gt=0, le=100)
    tipo_cliente: Literal["NORMAL", "VIP"]