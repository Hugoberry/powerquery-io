---
title: Table.PositionOf
---

# Table.PositionOf


Кестедегі жолдың орнын немесе орындарын қайтарады.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Көрсетілген `row` ішіндегі `table` бірінші данасының жол орнын қайтарады. Ешқандай оқиға табылмаса, -1 қайтарады.

-   `table`: кіріс кесте.
-   `row`: кестедегі орнын анықтау керек жол.
-   `occurrence`: *\[Міндетті емес\]* қайтарылатын жолдың қайталауларын көрсетеді.
-   `equationCriteria`: *\[Міндетті емес\]* кесте жолдарын салыстыруды басқарады.


## Examples

### Example #1
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` кестесінде \[a = 2, b = 4\] бірінші данасының орнын анықтау.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` кестесінде \[a = 2, b = 4\] екінші данасының орнын анықтау.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` кестесінде \[a = 2, b = 4\] барлық даналарының орнын анықтау.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
