---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Permet importar dades de l'HDInsight Interactive Query.


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna una llista de taules de l'HDInsight Interactive Query que especifica la base de dades `database` del servidor de l'HDInsight Interactive Query `server`. Opcionalment, es pot especificar un número de port amb el servidor separat per dos punts. També es pot especificar un paràmetre d'opcions, `options`, per controlar les opcions següents:

-   `ConnectionTimeout`: durada que controla quant de temps s'ha d'esperar abans de deixar d'intentar establir una connexió amb el servidor. El valor per defecte depèn del controlador.
-   `CommandTimeout`: durada que controla durant quant de temps es pot executar la consulta de servidor abans de cancel·lar-la. El valor per defecte depèn del controlador.

El paràmetre `options` s'especifica amb el format \[opció1 = valor1, opció2 = valor2...\].


