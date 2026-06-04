---
title: Table.SplitAt
---

# Table.SplitAt


Menghasilkan daftar yang berisi baris hitungan pertama yang ditentukan dan baris yang tersisa.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Menghasilkan daftar yang berisi dua tabel: tabel dengan N baris pertama dari `table` (seperti yang ditentukan oleh `count`) dan tabel yang berisi baris yang tersisa dari `table`. Jika tabel dari daftar yang dihasilkan dihitung tepat satu kali dan secara berurutan, fungsi akan menghitung `table` satu kali saja.


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
