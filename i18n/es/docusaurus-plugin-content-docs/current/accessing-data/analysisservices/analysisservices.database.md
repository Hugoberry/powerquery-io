---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Devuelve una tabla de cubos multidimensionales o de modelos tabulares de la base de datos de Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de cubos multidimensionales o de modelos tabulares de la base de datos `database` de Analysis Services que se encuentra en el servidor `server`. Se puede especificar un parámetro de registro opcional, `options`, para controlar las siguientes opciones:

-   `Query` : Una consulta MDX nativa usada para recuperar datos.
-   `TypedMeasureColumns` : Un valor lógico que indica si los tipos especificados del modelo tabular o multidimensional se usarán para los tipos de columnas de medidas agregadas. Cuando se establece en false, el tipo "number" se usará para todas las columnas de medidas. El valor predeterminado para esta opción es false.
-   `Culture` : Un nombre de referencia cultural que especifica la referencia cultural de los datos. Este se corresponde con la propiedad de cadena de conexión "Locale Identifier".
-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado depende del controlador.
-   `ConnectionTimeout` : Duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado depende del controlador.
-   `SubQueries` : Número (0, 1 o 2) que establece el valor de la propiedad "SubQueries" en la cadena de conexión. Controla el comportamiento de los miembros calculados en subselecciones o subcubos, y el valor predeterminado es 2.
-   `Implementation`



## Category
Accessing data
