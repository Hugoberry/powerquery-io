---
title: Odbc.Query
---

# Odbc.Query


Devolve o resultado de executar unha consulta nativa nunha orixe de datos ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Devolve o resultado de executar `query` coa cadea de conexión `connectionString` mediante ODBC. `connectionString` pode ser texto ou un rexistro de pares de valores de propiedade. Os valores de propiedade poden ser texto ou números. Pode fornecerse un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os campos seguintes:

-   `ConnectionTimeout` : Duración que controla o tempo que se debe agardar antes de abandonar unha tentativa de conexión co servidor. O valor predefinido é de 15 segundos.
-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido é de dez minutos.
-   `SqlCompatibleWindowsAuth` : Unha lóxica (true/false) que determina se producir opcións de cadea de conexión compatibles con SQL Server para a autenticación de Windows. O valor predefinido é true.


## Examples

### Example #1
Devolve o resultado de executar una consulta sinxela fronte a cadea de conexión proporcionada.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
