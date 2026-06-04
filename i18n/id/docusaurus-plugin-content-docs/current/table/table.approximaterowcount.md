---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


Menghasilkan jumlah perkiraan baris dalam tabel.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

Menghasilkan perkiraan jumlah baris di `table`, atau kesalahan jika sumber data tidak mendukung perkiraan.


## Examples

### Example #1
Perkirakan jumlah kombinasi kota dan negara bagian yang berbeda dalam tabel besar, yang dapat digunakan sebagai perkiraan kardinalitas untuk kolom. Perkiraan kardinalitas begitu penting hingga berbagai sumber data (seperti SQL Server) mendukung perkiraan ini, sering menggunakan algoritma yang disebut HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
