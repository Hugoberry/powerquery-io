---
title: Table.Min
---

# Table.Min


## Description

Retorna la fila més petita o un valor per defecte amb els criteris donats.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Retorna la fila més petita de la <code>table</code>, donats els <code>comparisonCriteria</code>. Si la taula és buida, es retorna el valor opcional <code>default</code>.


## Examples

### Example #1 
Cerca la fila amb el valor més petit de la columna [a] a la taula.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
Cerca la fila amb el valor més petit de la columna [a] a la taula. Retorna -1 si està buida.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
