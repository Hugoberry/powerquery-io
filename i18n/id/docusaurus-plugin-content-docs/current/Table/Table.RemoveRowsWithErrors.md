---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Menghasilkan tabel dengan baris dihapus dari tabel input yang berisi kesalahan di minimal salah satu selnya. Jika daftar kolom ditetapkan, maka hanya sel di kolom tertentu yang akan diperiksa apakah ada kesalahan.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Menghasilkan tabel dengan baris dihapus dari tabel input yang berisi kesalahan di minimal salah satu selnya. Jika daftar kolom ditetapkan, maka hanya sel di kolom tertentu yang akan diperiksa apakah ada kesalahan.


## Examples

### Example #1 
Hapus nilai kesalahan dari baris pertama.
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
