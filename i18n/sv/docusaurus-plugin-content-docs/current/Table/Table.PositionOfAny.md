---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Returnerar positionen eller positionerna för någon av de angivna raderna i tabellen.


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

Returnerar radernas positioner från <code>table</code> i den första förekomsten av listan för <code>rows</code>. Returnerar -1 om ingen förekomst hittas.    <ul>    <li><code>table</code>: Indatatabellen.</li>       <li><code>rows</code>:  Listan med rader i tabellen som positionerna ska hittas för.</li>       <li><code>occurrence</code>: <i>[Valfritt]</i> Anger vilka förekomster av raden som ska returneras.</li>       <li><code>equationCriteria</code>: <i>[Valfritt]</i> Kontrollerar jämförelsen mellan tabellraderna.</li>    </ul>    


## Examples

### Example #1 
Hitta positionen för den första förekomsten av [a = 2, b = 4] eller [a = 6, b = 8] i tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Hitta positionen för alla förekomster av [a = 2, b = 4] eller [a = 6, b = 8] i tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
