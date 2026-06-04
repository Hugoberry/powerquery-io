---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Mempromosikan baris pertama nilai sebagai header kolom baru (yaitu nama kolom).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Mempromosikan baris pertama nilai sebagai header kolom baru (yaitu nama kolom). Secara default, hanya nilai teks atau angka dipromosikan ke header. Opsi valid:

-   `PromoteAllScalars`: Jika diatur ke `true`, semua nilai skalar di baris pertama dipromosikan ke header menggunakan `Culture`, jika ditentukan (atau lokal dokumen saat ini). Untuk nilai yang tidak dapat dikonversi ke teks, nama kolom default akan digunakan.
-   `Culture`: Nama kultur yang menentukan kultur untuk data.


## Examples

### Example #1
Mempromosikan baris pertama nilai dalam tabel.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2
Mempromosikan semua skalar pada baris pertama tabel ke header.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
