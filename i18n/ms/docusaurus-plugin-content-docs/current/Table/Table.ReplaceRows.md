---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Menggantikan julat baris yang ditentukan dengan baris yang diberi.


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

Menggantikan bilangan baris yang ditentukan, <code>count</code>, dalam input <code>table</code> dengan <code>rows</code> yang ditentukan, bermula selepas <code>offset</code>. Parameter <code>rows</code> ialah senarai rekod.    <ul>       <li><code>table</code>: Jadual yang mana penggantian dilakukan.</li>       <li><code>offset</code>: Bilangan baris untuk dilangkau sebelum membuat penggantian.</li>       <li><code>count</code>: Bilangan baris untuk digantikan.</li>       <li><code>rows</code>: Senarai rekod baris untuk dimasukkan ke dalam <code>table</code> di lokasi yang ditentukan oleh <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
Bermula di kedudukan 1, ganti 3 baris.
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
