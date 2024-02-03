---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Permet importar dades de l&#39;HDInsight Interactive Query.


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retorna una llista de taules de l'HDInsight Interactive Query que especifica la base de dades <code>database</code> del servidor de l'HDInsight Interactive Query <code>server</code>. Opcionalment, es pot especificar un número de port amb el servidor separat per dos punts. També es pot especificar un paràmetre d'opcions, <code>options</code>, per controlar les opcions següents:<ul>        <li><code>ConnectionTimeout</code>: durada que controla quant de temps s'ha d'esperar abans de deixar d'intentar establir una connexió amb el servidor. El valor per defecte depèn del controlador.</li>        <li><code>CommandTimeout</code>: durada que controla durant quant de temps es pot executar la consulta de servidor abans de cancel·lar-la. El valor per defecte depèn del controlador.</li></ul>El paràmetre <code>options</code> s'especifica amb el format [opció1 = valor1, opció2 = valor2...].


