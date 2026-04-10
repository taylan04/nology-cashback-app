from sqlalchemy.orm import Session
from app.models.historico_model import Historico

def salvar_consulta(db: Session, historico: Historico):
    db.add(historico)
    db.commit()
    db.refresh(historico)
    return historico

def buscar_por_ip(db: Session, ip: str):
    return db.query(Historico).filter(Historico.ip == ip).all()