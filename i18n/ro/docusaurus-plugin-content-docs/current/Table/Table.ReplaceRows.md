---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Înlocuieşte intervalul specificat de rânduri cu rândurile furnizate.


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

Înlocuieşte numărul specificat de rânduri, <code>count</code>, în datele introduse <code>table</code> cu <code>rows</code> specificat, care începe după <code>offset</code>. Parametrul <code>rows</code> este o listă de înregistrări.    <ul>       <li><code>table</code>: Tabelul în care este efectuată înlocuirea.</li>       <li><code>offset</code>: Numărul de rânduri de ignorat înainte de efectuarea înlocuirii.</li>       <li><code>count</code>: Numărul de rânduri de înlocuit.</li>       <li><code>rows</code>: Lista de înregistrări ale rândurilor de inserat în <code>table</code> în locaţia specificată de <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
Începând cu poziția 1, înlocuiți 3 rânduri.
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
