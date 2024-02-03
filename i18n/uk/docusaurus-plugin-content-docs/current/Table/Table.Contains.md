---
title: Table.Contains
---

# Table.Contains


## Description

Визначає, чи відображається вказаний запис у таблиці у вигляді рядка.


## Syntax

```powerquery
Table.Contains(
    table as table,
    row as record,
    optional equationCriteria as any
) as logical
```


## Details

Визначає, чи відображається вказаний запис, <code>row</code>, у <code>table</code> у вигляді рядка.    Можна вказати додатковий параметр <code>equationCriteria</code> для керування порівнянням рядків таблиці.


## Examples

### Example #1 
Визначити, чи містить таблиця рядок.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Bob"]
)
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи містить таблиця рядок.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Ted"]
)
```

Result: 
```powerquery
false
```


### Example #3 
Визначити, чи містить таблиця рядок, порівнюючи лише стовпець [Name].
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [CustomerID = 4, Name = "Bob"],
    "Name"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
