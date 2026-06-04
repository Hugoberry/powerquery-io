---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Combina les columnes especificades en una columna nova de valors de registre on cada registre té noms i valors de camps corresponents als noms i valors de les columnes que s'han combinat.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Combina les columnes especificades dels paràmetres `table` en una de nova amb valors de registre anomenada `newColumnName`, en què cada registre té noms i valors de camps corresponents als noms i valors de les columnes que s'han combinat. Si s'especifica un registre per al paràmetre `options`, es poden proporcionar les següents opcions:

-   `DisplayNameColumn`: quan s'especifica com a text, indica que el nom de la columna proporcionat s'ha de tractar com a nom de visualització del registre. No cal que sigui una de les columnes del mateix registre.
-   `TypeName`: quan s'especifica com a text, proporciona un nom de tipus lògic per al registre resultant, que es pot utilitzar durant la càrrega de dades per tal d'impulsar el comportament segons l'entorn de càrrega.



## Category
Table.Transformation
