---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Menghasilkan daftar yang berisi baris hitungan pertama yang ditentukan dan baris yang tersisa.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Menghasilkan daftar yang berisi dua tabel: tabel dengan N baris pertama dari <code>table</code> (seperti yang ditentukan oleh <code>count</code>) dan tabel yang berisi baris yang tersisa dari <code>table</code>.Jika tabel dari daftar yang dihasilkan dihitung tepat satu kali dan secara berurutan, fungsi akan menghitung <code>table</code> satu kali saja.


## Examples

### Example #1 
Menghasilkan dua baris pertama dari tabel dan baris yang tersisa dari tabel.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
