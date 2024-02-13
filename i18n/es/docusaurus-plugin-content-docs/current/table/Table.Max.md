---
title: Table.Max
---

# Table.Max


Devuelve el valor predeterminado o la fila mayor con los criterios dados.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Devuelve las filas mayores de <code>table</code>, dado el <code>comparisonCriteria</code>. Si la tabla está vacía, se devuelve un valor <code>default</code> opcional. 


## Examples

### Example #1 
Buscar la fila con el valor máximo de la columna [a] en la tabla &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Buscar la fila con el valor máximo de la columna [a] en la tabla &lt;code&gt;(\{})&lt;/code&gt;. Si está vacía, se devuelve -1.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
