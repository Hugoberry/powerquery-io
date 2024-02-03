---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Tiek aizstāts norādītais rindu diapazons ar nodrošināto(-ajām) rindu(-ām).


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

Tiek aizstāts norādītais rindu skaits <code>count</code> ievadē <code>table</code> ar norādīto <code>rows</code>, kas sākas pēc <code>offset</code>. <code>rows</code> parametram ir ierakstu saraksts.    <ul>       <li><code>table</code> tabula, kurā tiek veikta aizstāšana.</li>       <li><code>offset</code>: rindu skaits, kas jāizlaiž, pirms aizvietojuma veikšanas.</li>       <li><code>count</code>: aizstājamo rindu skaits.</li>       <li><code>rows</code>: rindu ierakstu saraksts, ko ievietot <code>table</code>, <code>offset</code> norādītajā atrašanās vietā.</li>    </ul>


## Examples

### Example #1 
Sākot no 1. pozīcijas, aizstājiet 3 rindas.
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
