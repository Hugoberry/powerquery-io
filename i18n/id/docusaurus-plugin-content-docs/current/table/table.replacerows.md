---
title: Table.ReplaceRows
---

# Table.ReplaceRows


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


## Remarks

Mengganti sejumlah baris tertentu, `count`, dalam input `table` dengan `rows` yang ditetapkan dan dimulai setelah `offset`. Parameter `rows` adalah daftar data.

-   `table`: Tabel untuk menjalankan penggantian.
-   `offset`: Jumlah baris yang akan dilewatkan sebelum melakukan penggantian.
-   `count`: Jumlah baris yang akan diganti.
-   `rows`: Daftar data baris yang akan disisipkan ke `table` di lokasi yang ditentukan oleh `offset`.


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
