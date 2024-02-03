---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

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


## Details

<code>table</code> ішінен <code>rows</code> тізімінің бірінші данасының жол(дар) орнын(дарын) қайтарады. Егер дана табылмаса, -1 мәнін қайтарады.    <ul>    <li><code>table</code>: кіріс кесте.</li>       <li><code>rows</code>:  кестедегі орындарын анықтау керек жолдардың тізімі.</li>       <li><code>occurrence</code>: <i>[Міндетті емес]</i> қайтарылатын жолдың қайталауларын көрсетеді.</li>       <li><code>equationCriteria</code>: <i>[Міндетті емес]</i> кесте жолдарын салыстыруды басқарады.</li>    </ul>    


## Examples

### Example #1 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; кестесінде [a = 2, b = 4] немесе [a = 6, b = 8] бірінші данасының орнын анықтау.
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
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt; кестесінде [a = 2, b = 4] немесе [a = 6, b = 8] барлық даналарының орнын анықтау.
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
