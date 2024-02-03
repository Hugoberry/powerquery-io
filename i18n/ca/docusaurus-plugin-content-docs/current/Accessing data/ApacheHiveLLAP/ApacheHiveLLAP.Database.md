---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

Permet importar dades del Hive LLAP.


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

Retorna una llista de taules del Hive LLAP que especifica la base de dades <code>database</code> del servidor del Hive LLAP <code>server</code> mitjançant el protocol <code>protocol</code> seleccionat. Si voleu, podeu especificar un número de port amb el servidor, separat per dos punts. El protocol de transport Thrift és un tipus enumerat amb els valors "Standard" i "HTTP". També es pot especificar un paràmetre d'opcions opcional, <code>options</code>, per controlar les opcions següents:<ul>        <li><code>ConnectionTimeout</code>: duració que controla la quantitat de temps en què es pot intentar la connexió al servidor abans de cancel·lar-la. El valor per defecte depèn del controlador.</li>        <li><code>CommandTimeout</code>: duració que controla la quantitat de temps en què es pot executar la consulta del servidor abans de cancel·lar-la. El valor per defecte depèn del controlador.</li></ul>El paràmetre <code>options</code> s'especifica amb el format [opció1 = valor1, opció2 = valor2...].


