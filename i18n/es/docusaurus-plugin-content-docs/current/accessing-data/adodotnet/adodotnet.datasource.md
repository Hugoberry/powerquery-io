---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Devuelve la colección de esquema para un origen de datos de ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Devuelve la colección de esquema para el origen de datos de ADO.NET con el nombre de proveedor `providerName` y la cadena de conexión `connectionString`. `connectionString` puede ser texto o un registro de pares de valores de propiedad. Los valores de propiedad pueden ser de texto o numéricos. Se puede proporcionar un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener los siguientes campos:

-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10 minutos.
-   `SqlCompatibleWindowsAuth` : Lógica (true/false) que determina si se producen opciones de cadena de conexión compatibles con SQL Server para la autenticación de Windows. El valor predeterminado es "true".
-   `TypeMap`



## Category
Accessing data
