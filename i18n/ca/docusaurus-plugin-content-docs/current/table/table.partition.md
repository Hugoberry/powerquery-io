---
title: Table.Partition
---

# Table.Partition


Crea particions a la taula per formar llistes de taules basades en el nombre de grups i la columna especificada.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Crea particions a la `table` en una llista de `groups` nombre de taules, basada en el valor del `column` i una funció `hash`. La funció `hash` s'aplica al valor de la fila `column` per obtenir un valor hash per a la fila. El mòdul del valor hash `groups` determina en quina de les taules retornades es col·locarà la fila.

-   `table`: la taula en què es crearan particions.
-   `column`: la column en què s'aplicarà la funció hash per determinar a quina taula retornada es troba la fila.
-   `groups`: el nombre de taules en què es dividirà en particions la taula d'entrada.
-   `hash`: la funció aplicada per obtenir un valor hash.


## Examples

### Example #1
Fes particions a la taula `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` per crear 2 taules a la columna \[a\], amb el valor de les columnes com a funció hash.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
