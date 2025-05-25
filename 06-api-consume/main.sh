#!/bin/bash

ENDPOINT="http://www.dneonline.com/calculator.asmx"
SOAP_ACTION="http://tempuri.org/Subtract"
XML_PAYLOAD='<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xmlns:xsd="http://www.w3.org/2001/XMLSchema"
               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <Subtract xmlns="http://tempuri.org/">
      <intA>5</intA>
      <intB>10</intB>
    </Subtract>
  </soap:Body>
</soap:Envelope>'

curl -s "$ENDPOINT" \
  -H "Content-Type: text/xml; charset=utf-8" \
  -H "SOAPAction: \"$SOAP_ACTION\"" \
  -d "$XML_PAYLOAD"
