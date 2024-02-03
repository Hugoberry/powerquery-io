---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

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


## Details

Devolve unha lista de táboas da LLAP de Hive especificada na <code>base de datos</code> no <code>servidor</code> de LLAP de Hive co <code>protocolo</code> seleccionado. Pode especificarse de forma opcional un número de porto co servidor, separado por dous puntos. O protocolo de transporte Thrift é un tipo enumerado con valores "Standard" e "HTTP". Pode especificarse un parámetro <code>options</code> opcional para controlar as seguintes opcións:<ul>        <li><code>ConnectionTimeout</code>: unha duración que controla durante canto tempo se agarda ata que se abandona o intento de conectarse ao servidor. O valor predefinido depende do controlador.</li>        <li><code>CommandTimeout</code>: unha duración que controla durante canto tempo se permite executar a consulta do lado do servidor antes de cancelarse. O valor predefinido depende do controlador.</li></ul>O parámetro <code>options</code> especifícase como [option1 = value1, option2 = value2...].


