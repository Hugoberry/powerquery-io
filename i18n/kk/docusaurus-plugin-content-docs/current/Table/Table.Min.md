---
title: Table.Min
---

# Table.Min


## Description

Көрсетілген шарттарды пайдаланып ең кіші жолды немесе әдепкі мәнді қайтарады.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

<code>comparisonCriteria</code> берілген болса, <code>table</code> ішіндегі ең кіші жолды қайтарады. Егер кесте бос болса, міндетті емес <code>default</code> мәні қайтарылады.


## Examples

### Example #1 
Кестеде [a] бағанында ең кіші мән бар жолды анықтау.
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
Кестеде [a] бағанында ең кіші мән бар жолды анықтау. Бос болса, -1 мәнін қайтару.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
