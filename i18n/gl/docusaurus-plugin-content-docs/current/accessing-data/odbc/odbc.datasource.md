---
title: Odbc.DataSource
---

# Odbc.DataSource


Devolve unha táboa de táboas e visualizacións SQL da orixe de datos ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de táboas e visualizacións SQL da orixe de datos ODBC especificada pola cadea de conexión `connectionString`. `connectionString` pode ser texto ou un rexistro de pares de valores de propiedade. Os valores de propiedade poden ser texto ou números. Pode fornecerse un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os campos seguintes:

-   `CreateNavigationProperties` : Unha función lóxica (true/false) que establece se xerar propiedades de navegación nos valores devoltos (o valor predefinido é true).
-   `HierarchicalNavigation` : Unha función lóxica (true/false) que establece se ver as táboas agrupadas polos nomes de esquema (o valor predefinido é false).
-   `ConnectionTimeout` : Duración que controla o tempo que se debe agardar antes de abandonar unha tentativa de conexión co servidor. O valor predefinido é de 15 segundos.
-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido é de dez minutos.
-   `SqlCompatibleWindowsAuth` : Unha lóxica (true/false) que determina se producir opcións de cadea de conexión compatibles con SQL Server para a autenticación de Windows. O valor predefinido é true.


## Examples

### Example #1
Volve ás vistas e táboas SQL desde a cadea de conexión proporcionada.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
