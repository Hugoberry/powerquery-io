---
title: OleDb.DataSource
---

# OleDb.DataSource


Devolve unha táboa de visualizacións e táboas SQL da orixe de datos de OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de táboas e vistas SQL da fonte de datos OLE DB especificada pola cadea de conexión `connectionString` . `connectionString` pode ser texto ou un rexistro de pares de valores de propiedades. Os valores de propiedades poden ser texto ou número. Pódese proporcionar un parámetro de rexistro opcional, `options` , para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:

-   `CreateNavigationProperties` : Unha función lóxica (true/false) que establece se xerar propiedades de navegación nos valores devoltos (o valor predefinido é true).
-   `NavigationPropertyNameGenerator` : Unha función que se usa para crear nomes de propiedades de navegación.
-   `Query` : Unha consulta SQL nativa usada para recuperar datos. Se a consulta produce varios conxuntos de resultados, só se devolverá o primeiro.
-   `HierarchicalNavigation` : Un valor lóxico (true/false) que establece se ver as táboas agrupadas polos nomes de esquema (o valor predefinido é true).
-   `ConnectionTimeout` : Duración que controla o tempo que se debe agardar antes de abandonar un intento de conexión co servidor. O valor predefinido depende do controlador.
-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido é de dez minutos.
-   `SqlCompatibleWindowsAuth` : Unha lóxica (true/false) que determina se producir opcións de cadea de conexión compatibles con SQL Server para a autenticación de Windows. O valor predefinido é true.

O parámetro de rexistro especifícase como \[opción1 = valor1, opción2 = valor2...\] ou \[Consulta = "seleccionar ..."\], por exemplo.



## Category
Accessing data
