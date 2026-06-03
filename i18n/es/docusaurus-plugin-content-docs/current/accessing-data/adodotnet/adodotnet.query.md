---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Devuelve el resultado de ejecutar una consulta nativa en un origen de datos ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Devuelve el resultado de ejecutar `query` con la cadena de conexión `connectionString` mediante el proveedor de ADO.NET `providerName`. `connectionString` puede ser texto o un registro de pares de valores de propiedad. Los valores de propiedad pueden ser de texto o numéricos. Se puede proporcionar un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener los siguientes campos:

-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10 minutos.
-   `SqlCompatibleWindowsAuth` : Lógica (true/false) que determina si se producen opciones de cadena de conexión compatibles con SQL Server para la autenticación de Windows. El valor predeterminado es "true".



## Category
Accessing data
