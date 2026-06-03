---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Devuelve las bases de datos de Analysis Services de un host concreto.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Devuelve las bases de datos de una instancia de Analysis Services, `server`. Se puede proporcionar un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener los campos siguientes:

-   `TypedMeasureColumns` : Un valor lógico que indica si los tipos especificados del modelo tabular o multidimensional se usarán para los tipos de columnas de medidas agregadas. Cuando se establece en false, el tipo "number" se usará para todas las columnas de medidas. El valor predeterminado para esta opción es false.
-   `Culture` : Un nombre de referencia cultural que especifica la referencia cultural de los datos. Este se corresponde con la propiedad de cadena de conexión "Locale Identifier".
-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado depende del controlador.
-   `ConnectionTimeout` : Duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado depende del controlador.
-   `SubQueries` : Número (0, 1 o 2) que establece el valor de la propiedad "SubQueries" en la cadena de conexión. Controla el comportamiento de los miembros calculados en subselecciones o subcubos, y el valor predeterminado es 2.
-   `Implementation`



## Category
Accessing data
