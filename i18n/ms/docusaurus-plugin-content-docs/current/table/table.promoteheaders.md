---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Menaikkan aras baris pertama nilai sebagai pengepala lajur baharu (iaitu nama lajur).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Menaik aras baris pertama nilai sebagai pengepala lajur baru (cth. nama lajur). Ikut lalai, hanya nilai teks atau nombor yang dinaikkan aras ke pengepala. Opsyen sah:

-   `PromoteAllScalars`: Jika disetkan kepada `true`, semua nilai skalar dalam baris pertama dinaikkan aras kepada pengepala menggunakan `Culture`, jika ditentukan (atau penempatan dokumen semasa). Untuk nilai yang tidak boleh ditukar kepada teks, nama lajur lalai akan digunakan.
-   `Kultur`: Nama budaya yang menentukan budaya untuk data.


## Examples

### Example #1
Promosikan nilai baris pertama dalam jadual.
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
Menaikkan aras semua skalar dalam baris pertama jadual ke pengepala.
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
