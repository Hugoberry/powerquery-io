---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Mempromosikan baris pertama nilai sebagai header kolom baru (yaitu nama kolom).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Mempromosikan baris pertama nilai sebagai header kolom baru (yaitu nama kolom). Secara default, hanya nilai teks atau angka dipromosikan ke header. Opsi valid:    <div>      <code>PromoteAllScalars</code> : Jika ditetapkan ke <code>true</code>, semua nilai skalar pada baris pertama dipromosikan ke header menggunakan <code>Culture</code>, jika ditentukan (atau lokal dokumen saat ini).    Untuk nilai yang tidak dapat dikonversi ke teks, nama kolom default akan digunakan.    </div>    <div>    <code>Culture</code> : Nama kultur yang menentukan kultur untuk data.    </div>  


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
