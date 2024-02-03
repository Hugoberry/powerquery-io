---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Mengganti semua baris yang ditetapkan dengan baris yang tersedia.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Mengganti semua baris yang ditetapkan dalam <code>table</code> dengan baris yang tersedia. Baris yang akan diganti dan penggantinya ditentukan di <code>replacements</code>, menggunakan format \{old, new}.    Parameter <code>equationCriteria</code> opsional dapat ditentukan untuk mengontrol perbandingan di antara baris dalam tabel.


## Examples

### Example #1 
Mengganti baris [a = 1, b = 2] dan [a = 2, b = 3] dengan [a = -1, b = -2],[a = -2, b = -3] dalam tabel.
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
