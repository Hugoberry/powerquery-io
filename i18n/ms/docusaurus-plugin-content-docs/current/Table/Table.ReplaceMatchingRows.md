---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Menggantikan semua baris yang ditentukan dengan baris yang diberi.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Menggantikan semua baris yang ditentukan dalam <code>table</code> dengan yang diberi. Baris untuk digantikan dan penggantian ditentukan dalam <code>replacements</code>, menggunakan pemformatan \{old, new}.    Parameter pilihan <code>equationCriteria</code>, mungkin ditentukan untuk mengawal perbandingan antara baris pada jadual.


## Examples

### Example #1 
Gantikan baris [a = 1, b = 2] dan [a = 2, b = 3] dengan [a = -1, b = -2],[a = -2, b = -3] dalam jadual.
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
