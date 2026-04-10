from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.orm import declarative_base
from datetime import datetime

Base = declarative_base()

class Historico(Base):
    __tablename__ = "historico"

    id = Column(Integer, primary_key = True, index = True)
    ip = Column(String)
    tipo_cliente = Column(String)
    valor = Column(Float)
    desconto = Column(Float)
    cashback = Column(Float)
    data_criacao = Column(DateTime, default = datetime.now)

    def __str__(self):
        return f'{self.id}, {self.ip}, {self.tipo_cliente}, {self.valor}, {self.desconto}, {self.cashback}, {self.data_criacao}'