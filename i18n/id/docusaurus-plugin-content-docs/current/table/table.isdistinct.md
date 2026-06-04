---
title: Table.IsDistinct
---

# Table.IsDistinct


Menunjukkan apakah tabel berisi hanya baris berbeda (tidak ada duplikat).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Menunjukkan apakah `table` berisi hanya baris berbeda (tidak ada duplikat). Menghasilkan `true` jika baris berbeda, `false` jika sebaliknya. Parameter opsional, `comparisonCriteria`, menetapkan kolom yang akan diuji untuk duplikasi. Jika `comparisonCriteria` tidak ditetapkan, semua kolom akan diuji.


## Examples

### Example #1
Menentukan apakah tabel berbeda.
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
Menentukan apakah tabel berbeda dalam kolom.
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
