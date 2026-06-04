---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Retorna la posició o les posicions de qualsevol de les files especificades dins de la taula.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Retorna les posicions de les files a partir del `table` de la primera aparició de la llista de `rows`. Retorna -1 si no es troba cap ocurrència.

-   `table`: taula d'entrada.
-   `rows`: llista de files de la taula de la qual se cercaran posicions.
-   `occurrence`: *(Opcional)* Especifica quines aparicions de la fila es retornaran.
-   `equationCriteria`: *(Opcional)* Controla la comparació entre les files de la taula.


## Examples

### Example #1
Troba la posició de la primera aparició de \[a = 2, b = 4\] o \[a = 6, b = 8\] a la taula `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Troba la posició de totes les aparicions de \[a = 2, b = 4\] o \[a = 6, b = 8\] a la taula `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
