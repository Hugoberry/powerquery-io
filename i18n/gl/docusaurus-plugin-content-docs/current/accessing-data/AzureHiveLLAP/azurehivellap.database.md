---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Importación de datos de HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve unha lista de táboas de HDInsight Interactive Query especificada na `base de datos` do `servidor` de HDInsight Interactive Query. Pode especificarse de forma opcional un número de porto co servidor, separado de dous puntos. Pode especificarse un parámetro `options` opcional para controlar as seguintes opcións:

-   `ConnectionTimeout`: Unha duración que controla o tempo de espera antes de abandonar unha tentativa para establecer unha conexión co servidor. O valor predefinido é dependente do controlador.
-   `CommandTimeout`: Unha duración que controla o tempo que ten permitido executarse a consulta do lado do servidor antes de cancelarse. O valor predefinido é dependente do controlador.

O parámetro `options` especifícase como \[option1 = value1, option2 = value2...\].


