---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Menunjukkan sama ada sebarang baris dalam jadual mencapai syarat yang ditentukan.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Menunjukkan sama ada sebarang baris dalam <code>table</code> sepadan dengan <code>condition</code> yang ditentukan. Mengembalikan <code>true</code> jika sebarang baris sepadan, <code>false</code> sebaliknya.


## Examples

### Example #1 
Tentukan sama anda sebarang nilai baris dalam lajur [a] adalah genap dalam jadual &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2 
Tentukan sama anda sebarang nilai baris adalah [a = 1, b = 2] dalam jadual &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
