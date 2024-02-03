---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Указує, чи містить таблиця лише унікальні рядки (без повторів).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Указує, чи таблиця <code>table</code> містить лише унікальні рядки (без повторів). Повертає значення <code>true</code>, якщо всі рядки унікальні, а в іншому випадку – значення <code>false</code>.    Додатковий параметр <code>comparisonCriteria</code> визначає, які стовпці таблиці перевіряються на повтори. Якщо <code>comparisonCriteria</code> не вказано, перевіряються всі стовпці.


## Examples

### Example #1 
Визначити, чи має таблиця лише унікальні значення.
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
Визначити, чи має таблиця лише унікальні значення в стовпці.
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
