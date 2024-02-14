---
title: Table.Min
---

# Table.Min


Devuelve el valor predeterminado o la fila menor con los criterios dados.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Devuelve las filas mayores de <code>table</code>, dado el <code>comparisonCriteria</code>. Si la tabla está vacía, se devuelve un valor <code>default</code> opcional.


## Examples

### Example #1 
Buscar la fila con el valor menor de la columna [a] en la tabla.
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
Buscar la fila con el valor menor de la columna [a] en la tabla. Si está vacía, se devuelve -1.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
