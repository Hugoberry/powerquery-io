---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Expandeix una columna de registres en columnes amb cadascun dels valors.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Donada la `column` de registres de l'entrada `table`, crea una taula amb una columna per a cada camp del registre. Com a opció, es pot especificar `newColumnNames` per garantir noms únics per a les columnes de la taula nova.

-   `table`: la taula original amb la columna de registre que s'ha d'expandir.
-   `column`: la columna que s'ha d'expandir.
-   `fieldNames`: la llista de camps que s'ha d'expandir en columnes de la taula.
-   `newColumnNames`: la llista de noms de columna que s'han de posar a les columnes noves. Els noms de columna nous no poden duplicar cap columna de la taula nova.


## Examples

### Example #1
Expandeix la columna \[a\] de la taula `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` en 3 columnes: "aa", "bb" i "cc".
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
