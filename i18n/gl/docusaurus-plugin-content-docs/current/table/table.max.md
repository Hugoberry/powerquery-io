---
title: Table.Max
---

# Table.Max


Devolve a fila maior ou o valor predefinido usando os criterios indicados.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Devolve a fila maior da `table`, dados os `comparisonCriteria`. Se a táboa está baleira, devólvese o valor opcional `default`.


## Examples

### Example #1
Buscar a fila co maior valor na columna \[a\] da táboa `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Buscar a fila co maior valor na columna \[a\] da táboa `({})`. Devolver -1 se está baleira.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
