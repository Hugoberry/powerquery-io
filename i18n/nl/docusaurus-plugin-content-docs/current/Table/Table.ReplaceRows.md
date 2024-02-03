---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Vervangt het opgegeven bereik rijen door de aangeleverde rij of rijen.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Details

Vervangt het opgegeven aantal rijen, <code>count</code>, in de invoer <code>table</code> door de opgegeven <code>rows</code>, te beginnen na de <code>offset</code>. De parameter <code>rows</code> is een lijst met records.    <ul>       <li><code>table</code>: de tabel waar de vervanging wordt uitgevoerd.</li>       <li><code>offset</code>: het aantal rijen dat moet worden overgeslagen voordat er wordt vervangen.</li>       <li><code>count</code>: het aantal rijen dat u wilt vervangen.</li>       <li><code>rows</code>: de lijst met rijrecords die moet worden ingevoegd in de <code>table</code> op de locatie die wordt opgegeven door de <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
Vanaf positie 1 drie rijen vervangen.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
