---
title: Table.PositionOf
---

# Table.PositionOf


## Description

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


## Details

Көрсетілген <code>table</code> ішіндегі <code>row</code> бірінші данасының жол орнын қайтарады. Егер дана табылмаса, -1 мәнін қайтарады.    <ul>       <li><code>table</code>: кіріс кесте.</li>       <li><code>row</code>: кестедегі орнын анықтау керек жол.</li>       <li><code>occurrence</code>: <i>[Міндетті емес]</i> қайтарылатын жолдың қайталауларын көрсетеді.</li>       <li><code>equationCriteria</code>: <i>[Міндетті емес]</i> кесте жолдарын салыстыруды басқарады.</li>    </ul>    


## Examples

### Example #1 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; кестесінде [a = 2, b = 4] бірінші данасының орнын анықтау.
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
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; кестесінде [a = 2, b = 4] екінші данасының орнын анықтау.
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
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; кестесінде [a = 2, b = 4] барлық даналарының орнын анықтау.
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
