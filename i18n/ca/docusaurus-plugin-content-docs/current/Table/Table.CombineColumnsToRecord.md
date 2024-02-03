---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

Combina les columnes especificades en una columna nova de valors de registre on cada registre té noms i valors de camps corresponents als noms i valors de les columnes que s&#39;han combinat.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Details

Combina les columnes especificades dels paràmetres <code>table</code> en una de nova amb valors de registre anomenada <code>newColumnName</code>, en què cada registre té noms i valors de camps corresponents als noms i valors de les columnes que s'han combinat. Si s'especifica un registre per al paràmetre <code>options</code>, es poden proporcionar les següents opcions:    <ul>     <li> <code>DisplayNameColumn</code>: quan s'especifica com a text, indica que el nom de la columna proporcionat s'ha de tractar com a nom de visualització del registre. No cal que sigui una de les columnes del mateix registre.</li>     <li> <code>TypeName</code>: quan s'especifica com a text, proporciona un nom de tipus lògic per al registre resultant, que es pot utilitzar durant la càrrega de dades per tal d'impulsar el comportament segons l'entorn de càrrega.</li>    </ul>    



## Category
Table.Transformation
