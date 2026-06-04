---
title: Table.Max
---

# Table.Max


Көрсетілген шарттарды пайдаланып ең үлкен жолды немесе әдепкі мәнді қайтарады.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

`comparisonCriteria` берілген болса, `table` ішіндегі ең үлкен жолды қайтарады. Егер кесте бос болса, міндетті емес `default` мәні қайтарылады.


## Examples

### Example #1
`({[a = 2, b = 4], [a = 6, b = 8]})` кестесінде \[a\] бағанында ең үлкен мән бар жолды анықтау.
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
`({})` кестесінде \[a\] бағанында ең үлкен мән бар жолды анықтау. Бос болса, -1 мәнін қайтару.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
