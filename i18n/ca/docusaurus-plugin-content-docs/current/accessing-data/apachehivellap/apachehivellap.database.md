---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


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


## Remarks

Retorna una llista de taules del Hive LLAP que especifica la base de dades `database` del servidor del Hive LLAP `server` mitjançant el protocol `protocol` seleccionat. Si voleu, podeu especificar un número de port amb el servidor, separat per dos punts. El protocol de transport Thrift és un tipus enumerat amb els valors "Standard" i "HTTP". També es pot especificar un paràmetre d'opcions opcional, `options`, per controlar les opcions següents:

-   `ConnectionTimeout`: duració que controla la quantitat de temps en què es pot intentar la connexió al servidor abans de cancel·lar-la. El valor per defecte depèn del controlador.
-   `CommandTimeout`: duració que controla la quantitat de temps en què es pot executar la consulta del servidor abans de cancel·lar-la. El valor per defecte depèn del controlador.

El paràmetre `options` s'especifica amb el format \[opció1 = valor1, opció2 = valor2...\].


