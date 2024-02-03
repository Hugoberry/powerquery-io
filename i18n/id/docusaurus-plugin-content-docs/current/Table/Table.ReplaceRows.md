---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Mengganti rentang baris tertentu dengan baris yang tersedia.


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

Mengganti sejumlah baris tertentu, <code>count</code>, dalam input <code>table</code> dengan <code>rows</code> yang ditetapkan dan dimulai setelah <code>offset</code>. Parameter <code>rows</code> adalah daftar data.    <ul>       <li><code>table</code>: Tabel untuk menjalankan penggantian.</li>       <li><code>offset</code>: Jumlah baris yang akan dilewatkan sebelum melakukan penggantian.</li>       <li><code>count</code>: Jumlah baris yang akan diganti.</li>       <li><code>rows</code>: Daftar data baris yang akan disisipkan ke <code>table</code> di lokasi yang ditentukan oleh <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
Mulai pada posisi 1, mengganti 3 baris.
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
