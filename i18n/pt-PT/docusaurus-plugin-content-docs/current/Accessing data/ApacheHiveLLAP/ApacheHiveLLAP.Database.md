---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Importar dados de um LLAP do Hive


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Devolve uma lista de tabelas do Hive LLAP especificadas pela <code>base de dados</code> no <code>servidor</code> do Hive LLAP mediante a utilização do <code>protocolo</code> selecionado. Opcionalmente, pode ser especificado um número de porta juntamente com o servidor, separado por dois pontos. O Thrift Transport Protocol é um tipo enumerado com os valores "Standard", "HTTP". Pode ser especificado um parâmetro <code>options</code> opcional, para controlar as opções seguintes:<ul>        <li><code>ConnectionTimeout</code>: uma duração que controla quanto tempo aguardar até abandonar uma tentativa de fazer uma ligação ao servidor. O valor predefinido é dependente do controlador.</li>        <li><code>CommandTimeout</code>: uma duração que controla durante quanto tempo é que a consulta do lado do servidor tem permissão para ser executada antes de se cancelada. O valor predefinido é dependente do controlador.</li></ul>O parâmetro <code>options</code> é especificado como [opção1 = valor1, opção2 = valor2...].


