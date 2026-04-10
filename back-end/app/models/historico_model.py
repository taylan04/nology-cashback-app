from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Produto(Base):
    __tablename__ = "historico"

    id_consulta = Column(Integer, primary_key=True)
    ip = Column(String)
    tipo_cliente = Column(String)
    valor = Column(Float)
    desconto = Column(Float)
    data_criacao = Column(DateTime)

    def __init__(self, id_consulta, ip, tipo_cliente, valor, desconto):
        self.id_consulta = id_consulta
        self.ip = ip
        self.tipo_cliente = tipo_cliente
        self.desconto = desconto
        self.valor = valor
        self.data_criacao = datetime.strftime("%Y-%m-%d %H:%M:%S")

    def __str__(self):
        return f'{self.id_consulta}, {self.ip}, {self.tipo_cliente}, {self.desconto}, {self.valor}, {self.data_criacao}'