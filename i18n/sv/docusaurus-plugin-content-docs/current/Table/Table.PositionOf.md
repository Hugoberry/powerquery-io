---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Returnerar positionen eller positionerna för raden i tabellen.


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

Returnerar radpositionen för den första förekomsten av <code>row</code> i angiven <code>table</code>. Returnerar -1 om ingen förekomst hittas.    <ul>       <li><code>table</code>: Indatatabellen.</li>       <li><code>row</code>: Raden i tabellen som positionen ska hittas för.</li>       <li><code>occurrence</code>: <i>[Valfritt]</i> Anger vilka förekomster av raden som ska returneras.</li>       <li><code>equationCriteria</code>: <i>[Valfritt]</i> Kontrollerar jämförelsen mellan tabellraderna.</li>    </ul>    


## Examples

### Example #1 
Hitta positionen för den första förekomsten av [a = 2, b = 4] i tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Hitta positionen för den andra förekomsten av [a = 2, b = 4] i tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Hitta positionen för alla förekomster av [a = 2, b = 4] i tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
