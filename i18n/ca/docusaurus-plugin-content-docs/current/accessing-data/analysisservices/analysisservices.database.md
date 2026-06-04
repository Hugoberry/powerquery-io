---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Retorna una taula de cubs multidimensionals o models tabulars de la base de dades de l'Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula de cubs multidimensionals o models tabulars de la base de dades de l'Analysis Services `database` al servidor `server`. Es pot especificar un paràmetre de registre opcional, `options`, per controlar les opcions següents:

-   `Query` : Consulta MDX nativa que s'utilitza per recuperar dades.
-   `TypedMeasureColumns` : Valor lògic que indica si els tipus especificats en el model multidimensional o tabular s'utilitzaran per als tipus de les columnes de mesura afegides. Si s'estableix com a "false", el tipus "number" s'utilitzarà per a totes les columnes de mesura. El valor per defecte d'aquesta opció és "false".
-   `Culture` : Nom de cultura que n'especifica la de les dades. Correspon a la propietat de cadena de connexió "Locale Identifier".
-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte depèn del controlador.
-   `ConnectionTimeout` : Duració que controla el temps que cal esperar abans de cancel·lar un intent per establir una connexió amb el servidor. El valor per defecte depèn del controlador.
-   `SubQueries` : Número (0, 1 o 2) que defineix el valor de la propietat "SubQueries" a la cadena de connexió. Controla el comportament dels membres calculats en subseleccions o subcubs (el valor per defecte és 2).
-   `Implementation`



## Category
Accessing data
