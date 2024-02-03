---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Mengembalikan senarai mengandungi baris kiraan pertama yang ditentukan dan baris yang tinggal.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Mengembalikan senarai yang mengandungi dua jadual: jadual dengan baris N pertama bagi <code>table</code> (seperti yang ditentukan oleh <code>count</code>) dan jadual yang mengandungi baris yang tinggal bagi <code>table</code>.Jika jadual bagi senarai yang terhasil dinomborkan tepatnya sekali dan dalam tertib, fungsi akan dinomborkan <code>table</code> hanya sekali.


## Examples

### Example #1 
Mengembalikan dua baris pertama bagi jadual dan baris jadual yang tinggal.
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
