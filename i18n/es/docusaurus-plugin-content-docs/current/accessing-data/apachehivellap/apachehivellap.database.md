---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Permite importar datos de Hive LLAP.


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

Devuelve una lista de tablas de Hive LLAP que especifica la base de datos <code>database</code> en el servidor Hive LLAP <code>server</code> mediante el protocolo <code>protocol</code> seleccionado. Opcionalmente, se puede especificar un número de puerto con el servidor separado por dos puntos. El protocolo de transporte Thrift es un tipo enumerado con los valores "Standard" y "HTTP". También se puede especificar un parámetro de opciones, <code>options</code>, para controlar las opciones siguientes:<ul>        <li><code>ConnectionTimeout</code>: duración que controla cuánto tiempo hay que esperar antes de dejar de intentar establecer una conexión con el servidor. El valor predeterminado depende del controlador.</li>        <li><code>CommandTimeout</code>: duración que controla durante cuánto tiempo se puede ejecutar la consulta de servidor antes de cancelarla. El valor predeterminado depende del controlador.</li></ul>El parámetro <code>options</code> se especifica como [opción1 = valor1, opción2 = valor2...].


