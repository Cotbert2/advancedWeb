const http = require('http');
const { parseString } = require('xml2js');

function handleSoapRequest(req, res) {
  let body = '';

  req.on('data', chunk => (body += chunk));
  req.on('end', () => {
    parseString(body, (err, result) => {
      if (err) {
        res.writeHead(500);
        return res.end('Invalid XML');
      }

      try {
        const params = result['Envelope']['Body'][0]['calcularIMC'][0];
        const altura = parseFloat(params['altura'][0]);
        const peso = parseFloat(params['peso'][0]);

        if (!altura || altura <= 0 || !peso) {
          throw new Error('Invalid values');
        }

        const icm = peso / (altura * altura);
        const icmStr = icm.toFixed(2);

        const soapResponse = `
          <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <calcularIMCResponse>
                <result>Tu ICM es ${icmStr}</result>
              </calcularIMCResponse>
            </soap:Body>
          </soap:Envelope>
        `;

        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(soapResponse);
      } catch (e) {
        res.writeHead(400);
        res.end('Error procesando el SOAP');
      }
    });
  });
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    handleSoapRequest(req, res);
  } else {
    res.writeHead(200);
    res.end('ICM SOAP Service (no-WSDL)');
  }
});

server.listen(8000, () => {
  console.log('Servidor SOAP sin WSDL en http://10.40.26.232:8000');
});
