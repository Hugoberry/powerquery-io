---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Nyatakan sama ada jadual mengandungi hanya baris tersendiri (tiada pendua).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Nyatakan sama ada <code>table</code> mengandungi hanya baris tersendiri (tiada pendua). Mengembalikan <code>true</code> jika baris adalah unik, <code>false</code> sebaliknya.    Parameter pilihan, <code>comparisonCriteria</code>, menentukan lajur yang mana pada jadual diuji untuk penduaan. Jika <code>comparisonCriteria</code> tidak diperlukan, semua lajur telah diuji.


## Examples

### Example #1 
Tentukan sama ada jadual adalah tersendiri.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
Tentukan sama ada jadual adalah tersendiri dalam lajur.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
