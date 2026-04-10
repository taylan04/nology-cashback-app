from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from app.schemas.cashback_request import CashbackRequest
from app.schemas.cashback_response import CashbackResponse
from app.schemas.historico_response import HistoricoResponse
from app.services.cashback_service import calcular_cashback
from app.repositories.historico_repository import salvar_consulta, buscar_por_ip
from app.database.connection import get_db
from app.models.historico_model import Historico
from app.utils.utils import get_client_ip

router = APIRouter()

# esse response model é pra definir qual vai ser o formato da resposta do endpoint
# depends chama get_db() do conexão automaticamente, é coisa do fastAPI, todo mundo usa 
@router.post("/cashback", response_model=CashbackResponse)
def calcular_cashback_route(dados: CashbackRequest,request: Request,db: Session = Depends(get_db)):
    
    ip = get_client_ip(request)

    cashback = calcular_cashback(dados.valor, dados.desconto, dados.tipo_cliente)

    historico = Historico(
        ip=ip,
        tipo_cliente=dados.tipo_cliente,
        valor=dados.valor,
        desconto=dados.desconto,
        cashback=cashback
        )

    salvar_consulta(db, historico)

    return {"cashback": cashback}

@router.get("/historico", response_model=list[HistoricoResponse])
def listar_historico(request: Request,db: Session = Depends(get_db)):
    
    ip = get_client_ip(request)
    dados = buscar_por_ip(db, ip)

    return dados