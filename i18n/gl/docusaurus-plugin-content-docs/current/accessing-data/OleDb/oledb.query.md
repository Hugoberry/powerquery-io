---
title: OleDb.Query
---

# OleDb.Query


Devolve o resultado de executar unha consulta nativa nunha orixe de datos OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Devolve o resultado de executar `query` coa cadea de conexión `connectionString` mediante OLE DB. `connectionString` pode ser texto ou un rexistro de pares de valores de propiedade. Os valores de propiedade poden ser texto ou números. Pode fornecerse un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:

-   `ConnectionTimeout` : Duración que controla o tempo que se debe agardar antes de abandonar un intento de conexión co servidor. O valor predefinido depende do controlador.
-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido é de dez minutos.
-   `SqlCompatibleWindowsAuth` : Unha lóxica (true/false) que determina se producir opcións de cadea de conexión compatibles con SQL Server para a autenticación de Windows. O valor predefinido é true.



## Category
Accessing data
