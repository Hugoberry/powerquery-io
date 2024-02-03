---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

No tabulas tiek noņemti visi norādīto rindu gadījumi.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

No <code>table</code> noņem visus norādītās <code>rows</code> gadījumus.    Varat norādīt neobligātu parametru <code>equationCriteria</code>, lai kontrolētu salīdzināšanu starp tabulas rindām.


## Examples

### Example #1 
Noņemiet visas rindas, kur [a = 1], no tabulas &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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
