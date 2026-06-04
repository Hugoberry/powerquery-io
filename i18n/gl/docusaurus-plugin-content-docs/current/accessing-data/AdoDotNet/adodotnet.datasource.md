---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Devolve a colección de esquemas dunha orixe de datos ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Devolve a colección de esquemas da orixe de datos ADO.NET co nome de fornecedor `providerName` e a cadea de conexión `connectionString`. `connectionString` pode ser texto ou un rexistro de pares de valores de propiedade. Os valores de propiedade poden ser texto ou números. Pode fornecerse un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:

-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido é de dez minutos.
-   `SqlCompatibleWindowsAuth` : Unha lóxica (true/false) que determina se producir opcións de cadea de conexión compatibles con SQL Server para a autenticación de Windows. O valor predefinido é true.
-   `TypeMap`



## Category
Accessing data
