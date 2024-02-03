---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Pateikiama bet kurios iš nurodytų eilučių padėtis arba padėtys lentelėje.


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

Pateikiama (-os) pirmojo <code>rows</code> sąrašo atvejo eilutės (-ių) padėtis (-ys) iš <code>table</code>. Jei atvejų nerandama, pateikiama -1.    <ul>    <li><code>table</code>: įvesties lentelė.</li>       <li><code>rows</code>: sąrašas lentelės eilučių, kurių padėtis norima rasti.</li>       <li><code>occurrence</code>: <i>[pasirenkama]</i> nurodoma, kuriuos eilutės atvejus pateikti.</li>       <li><code>equationCriteria</code>: <i>[pasirenkama]</i> valdomas lentelės eilučių palyginimas.</li>    </ul>    


## Examples

### Example #1 
Raskite pirmojo [a = 2, b = 4] arba [a = 6, b = 8] atvejo padėtį lentelėje &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Raskite visų [a = 2, b = 4] arba [a = 6, b = 8] atvejų padėtį lentelėje &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
