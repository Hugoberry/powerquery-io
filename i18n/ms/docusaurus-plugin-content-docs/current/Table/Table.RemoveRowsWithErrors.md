---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Mengembalikan jadual dengan baris dialih keluar daripada jadual input yang mengandungi ralat dalam sekurang-kurangnya satu sel. Jika senarai lajur ditentukan, maka hanya sel dalam lajur yang ditentukan diperiksa untuk ralat.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Mengembalikan jadual dengan baris dialih keluar daripada jadual input yang mengandungi ralat dalam sekurang-kurangnya satu sel. Jika senarai lajur ditentukan, maka hanya sel dalam lajur yang ditentukan diperiksa untuk ralat.


## Examples

### Example #1 
Mengalih keluar nilai ralat daripada baris pertama.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
