---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Mengalih keluar semua tika bagi baris yang ditentukan daripada jadual.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Mengalih keluar semua tika bagi <code>rows</code> yang ditentukan daripada <code>table</code>.    Parameter pilihan <code>equationCriteria</code>, mungkin ditentukan untuk mengawal perbandingan antara baris pada jadual.


## Examples

### Example #1 
Alih keluar sebarang baris yang mana [a = 1] daripada jadual &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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
