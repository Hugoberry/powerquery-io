---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Importación de datos dunha LLAP de Hive


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

Devolve unha lista de táboas da LLAP de Hive especificada na `base de datos` no `servidor` de LLAP de Hive co `protocolo` seleccionado. Pode especificarse de forma opcional un número de porto co servidor, separado por dous puntos. O protocolo de transporte Thrift é un tipo enumerado con valores "Standard" e "HTTP". Pode especificarse un parámetro `options` opcional para controlar as seguintes opcións:

-   `ConnectionTimeout`: unha duración que controla durante canto tempo se agarda ata que se abandona o intento de conectarse ao servidor. O valor predefinido depende do controlador.
-   `CommandTimeout`: unha duración que controla durante canto tempo se permite executar a consulta do lado do servidor antes de cancelarse. O valor predefinido depende do controlador.

O parámetro `options` especifícase como \[option1 = value1, option2 = value2...\].


