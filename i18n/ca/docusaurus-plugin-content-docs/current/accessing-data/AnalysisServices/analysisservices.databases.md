---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Torna les bases de dades dels serveis d'anàlisi en un host concret.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Retorna les bases de dades d'una instància de l'Analysis Services, `server`. Es pot proporcionar un paràmetre de registre opcional, `options`, per especificar propietats addicionals. El registre pot contenir els camps següents:

-   `TypedMeasureColumns` : Valor lògic que indica si els tipus especificats en el model multidimensional o tabular s'utilitzaran per als tipus de les columnes de mesura afegides. Si s'estableix com a "false", el tipus "number" s'utilitzarà per a totes les columnes de mesura. El valor per defecte d'aquesta opció és "false".
-   `Culture` : Nom de cultura que n'especifica la de les dades. Correspon a la propietat de cadena de connexió "Locale Identifier".
-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte depèn del controlador.
-   `ConnectionTimeout` : Duració que controla el temps que cal esperar abans de cancel·lar un intent per establir una connexió amb el servidor. El valor per defecte depèn del controlador.
-   `SubQueries` : Número (0, 1 o 2) que defineix el valor de la propietat "SubQueries" a la cadena de connexió. Controla el comportament dels membres calculats en subseleccions o subcubs (el valor per defecte és 2).
-   `Implementation`



## Category
Accessing data
