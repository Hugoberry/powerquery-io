---
title: Table.Max
---

# Table.Max


Retorna la fila més gran o el valor per defecte amb els criteris donats.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Retorna la fila més gran de la `table`, donat els `comparisonCriteria`. Si la taula és buida, es retorna el valor opcional `default`.


## Examples

### Example #1
Troba la fila amb el valor més gran de la columna \[a\] a la taula `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
Troba la fila amb el valor més gran de la columna \[a\] a la taula `({})`. Retorna -1 si és buida.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
