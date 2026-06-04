---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Devolve as bases de datos de Analysis Services nun computador servidor particular.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Devolve bases de datos nunha instancia de Analysis Services, `server`. Pode fornecerse un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:

-   `TypedMeasureColumns` : Un valor lóxico que indica se os tipos especificados no modelo tabular ou multidimensional se usarán para os tipos das columnas de medida engadidas. Cando se establece en false, o tipo "number" usarase para todas as columnas de medida. O valor predefinido para esta opción é false.
-   `Culture` : Un nome de referencia cultural que especifica a referencia cultural dos datos. Este correspóndese coa propiedade de cadea de conexión "Locale Identifier".
-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido depende do controlador.
-   `ConnectionTimeout` : Duración que controla o tempo que se debe agardar antes de abandonar un intento de conexión co servidor. O valor predefinido depende do controlador.
-   `SubQueries` : Un número (0, 1 ou 2) que establece o valor da propiedade "SubQueries" na cadea de conexión. Isto controla o comportamento de membros calculados en subseleccións ou subcubos. (O valor predefinido é 2).
-   `Implementation`



## Category
Accessing data
