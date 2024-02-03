---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Menghapus semua kemunculan baris yang ditetapkan dari tabel.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Menghapus semua kemunculan <code>rows</code> yang ditentukan dari <code>table</code>.    Parameter opsional <code>equationCriteria</code> dapat ditentukan untuk mengontrol perbandingan di antara baris dalam tabel.


## Examples

### Example #1 
Menghapus setiap baris dengan [a = 1] dari tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
