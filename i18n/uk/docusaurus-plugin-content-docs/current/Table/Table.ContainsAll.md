---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Визначає, чи всі вказані записи відображаються в таблиці у вигляді рядків.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Визначає, чи всі вказані записи у списку записів <code>rows</code> відображаються в <code>table</code> у вигляді рядків.    Можна вказати додатковий параметр <code>equationCriteria</code> для керування порівнянням рядків таблиці.


## Examples

### Example #1 
Визначте, чи містить таблиця всі рядки, порівнюючи лише стовпець [CustomerID].
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи всі рядки містить таблиця.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
