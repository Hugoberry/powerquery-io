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

Devolve uma lista de tabelas do Hive LLAP especificadas pela `base de dados` no `servidor` do Hive LLAP mediante a utilização do `protocolo` selecionado. Opcionalmente, pode ser especificado um número de porta juntamente com o servidor, separado por dois pontos. O Thrift Transport Protocol é um tipo enumerado com os valores "Standard", "HTTP". Pode ser especificado um parâmetro `options` opcional, para controlar as opções seguintes:

-   `ConnectionTimeout`: uma duração que controla quanto tempo aguardar até abandonar uma tentativa de fazer uma ligação ao servidor. O valor predefinido é dependente do controlador.
-   `CommandTimeout`: uma duração que controla durante quanto tempo é que a consulta do lado do servidor tem permissão para ser executada antes de se cancelada. O valor predefinido é dependente do controlador.

O parâmetro `options` é especificado como \[opção1 = valor1, opção2 = valor2...\].


