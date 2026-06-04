---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Devolve unha táboa de cubos multidimensionais ou modelos tabulares da base de datos de Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de cubos multidimensionais ou modelos tabulares da base de datos de Analysis Services `database` no servidor `server`. Pode especificarse un parámetro de rexistro opcional, `options`, para controlar as opcións seguintes:

-   `Query` : Unha consulta MDX nativa usada para recuperar datos.
-   `TypedMeasureColumns` : Un valor lóxico que indica se os tipos especificados no modelo tabular ou multidimensional se usarán para os tipos das columnas de medida engadidas. Cando se establece en false, o tipo "number" usarase para todas as columnas de medida. O valor predefinido para esta opción é false.
-   `Culture` : Un nome de referencia cultural que especifica a referencia cultural dos datos. Este correspóndese coa propiedade de cadea de conexión "Locale Identifier".
-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido depende do controlador.
-   `ConnectionTimeout` : Duración que controla o tempo que se debe agardar antes de abandonar un intento de conexión co servidor. O valor predefinido depende do controlador.
-   `SubQueries` : Un número (0, 1 ou 2) que establece o valor da propiedade "SubQueries" na cadea de conexión. Isto controla o comportamento de membros calculados en subseleccións ou subcubos. (O valor predefinido é 2).
-   `Implementation`



## Category
Accessing data
