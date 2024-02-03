---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Указує, чи містить таблиця задані стовпці.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Указує, чи містить <code>table</code> задані стовпці <code>columns</code>. Повертає значення <code>true</code>, якщо таблиця містить такі стовпці, в іншому разі – <code>false</code>.


## Examples

### Example #1 
Визначити, чи містить таблиця стовпець [Name].
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи містить таблиця стовпці [Name] і [PhoneNumber].
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
