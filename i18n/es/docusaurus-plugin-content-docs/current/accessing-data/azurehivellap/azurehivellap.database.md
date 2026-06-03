---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Permite importar datos de HDInsight Interactive Query.


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devuelve una lista de tablas de HDInsight Interactive Query que especifica la base de datos `database` en el servidor de HDInsight Interactive Query `server`. Opcionalmente, se puede especificar un número de puerto con el servidor separado por dos puntos. También se puede especificar un parámetro de opciones, `options`, para controlar las opciones siguientes:

-   `ConnectionTimeout`: duración que controla cuánto tiempo hay que esperar antes de dejar de intentar establecer una conexión con el servidor. El valor predeterminado depende del controlador.
-   `CommandTimeout`: duración que controla durante cuánto tiempo se puede ejecutar la consulta de servidor antes de cancelarla. El valor predeterminado depende del controlador.

El parámetro `options` se especifica como \[opción1 = valor1, opción2 = valor2...\].


