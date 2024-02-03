---
title: Table.Max
---

# Table.Max


## Description

Devolve a fila maior ou o valor predefinido usando os criterios indicados.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Devolve a fila maior da <code>table</code>, dados os <code>comparisonCriteria</code>. Se a táboa está baleira, devólvese o valor opcional <code>default</code>. 


## Examples

### Example #1 
Buscar a fila co maior valor na columna [a] da táboa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Buscar a fila co maior valor na columna [a] da táboa &lt;code&gt;(\{})&lt;/code&gt;. Devolver -1 se está baleira.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
