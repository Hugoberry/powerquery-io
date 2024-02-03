---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Pateikiama eilutės padėtis arba padėtys lentelėje.


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

Pateikiama pirmojo <code>row</code> atvejo eilutės padėtis nurodytoje <code>table</code>. Jei atvejų nerandama, pateikiama -1.    <ul>       <li><code>table</code>: įvesties lentelė.</li>       <li><code>row</code>: lentelės eilutė, kurios padėtį reikia rasti.</li>       <li><code>occurrence</code>: <i>[pasirenkama]</i> nurodoma, kuriuos eilutės atvejus pateikti.</li>       <li><code>equationCriteria</code>: <i>[pasirenkama]</i> valdomas lentelės eilučių palyginimas.</li>    </ul>    


## Examples

### Example #1 
Raskite pirmojo [a = 2, b = 4] atvejo padėtį lentelėje &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Raskite antrojo [a = 2, b = 4] atvejo padėtį lentelėje &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Raskite visų [a = 2, b = 4] atvejų padėtį lentelėje &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
