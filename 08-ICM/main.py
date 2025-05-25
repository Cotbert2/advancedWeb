# -*- coding: utf-8 -*-
from spyne import Application, rpc, ServiceBase, Float, Unicode
from spyne.protocol.soap import Soap11
from spyne.server.wsgi import WsgiApplication

class ICMService(ServiceBase):
    @rpc(Float, Float, _returns=Unicode)
    def calcular_icm(ctx, altura, peso):
        if altura <= 0:
            return u"Altura inválida"
        icm = peso / (altura * altura)
        return u"Tu ICM es %.2f" % icm

application = Application(
    [ICMService],
    tns='spyne.icm.service',
    in_protocol=Soap11(),
    out_protocol=Soap11()
)

if __name__ == '__main__':
    from wsgiref.simple_server import make_server
    print("Servidor SOAP disponible en http://127.0.0.1:8000")
    wsgi_app = WsgiApplication(application)
    server = make_server('127.0.0.1', 8000, wsgi_app)
    server.serve_forever()
