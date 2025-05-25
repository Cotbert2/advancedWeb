const soap = require('soap');

const url = 'http://www.dneonline.com/calculator.asmx?WSDL';

soap.createClient(url, function(err, client) {
  if (err) {
    return console.error('Error creating SOAP client:', err);
  }

  // Llamada al método 'Add'
  const args = { intA: 5, intB: 3 };
  client.Add(args, function(err, result) {
    if (err) {
      console.error('SOAP Error:', err);
    } else {
      console.log('Resultado de Add:', result.AddResult);
    }
  });
});
