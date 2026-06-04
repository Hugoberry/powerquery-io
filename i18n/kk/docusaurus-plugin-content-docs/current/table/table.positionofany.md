---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Кестедегі көрсетілген жолдардың кез келгенінің орнын немесе орындарын қайтарады.


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

`table` ішінен `rows` тізімінің бірінші данасының жол(дар) орнын(дарын) қайтарады. Ешқандай оқиға табылмаса, -1 қайтарады.

-   `table`: кіріс кесте.
-   `rows`: кестедегі орындарын анықтау керек жолдардың тізімі.
-   `occurrence`: *\[Міндетті емес\]* қайтарылатын жолдың қайталауларын көрсетеді.
-   `equationCriteria`: *\[Міндетті емес\]* кесте жолдарын салыстыруды басқарады.


## Examples

### Example #1
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` кестесінде \[a = 2, b = 4\] немесе \[a = 6, b = 8\] бірінші данасының орнын анықтау.
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
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}` кестесінде \[a = 2, b = 4\] немесе \[a = 6, b = 8\] барлық даналарының орнын анықтау.
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
