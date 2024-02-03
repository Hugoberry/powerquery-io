---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Mengembalikan anggaran bilangan baris dalam jadual.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Mengembalikan anggaran bilangan baris dalam <code>table</code>, atau ralat jika sumber data tidak menyokong anggaran.


## Examples

### Example #1 
Anggarkan bilangan gabungan bandar dan negeri yang berbeza dalam jadual besar, yang boleh digunakan sebagai anggaran kejituan untuk lajur. Anggaran kewajipan adalah penting yang mana pelbagai sumber data (seperti SQL Server) menyokong penganggaran tertentu ini, kerap menggunakan algoritma yang dipanggil HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
