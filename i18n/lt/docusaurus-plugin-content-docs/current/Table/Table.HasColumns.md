---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Nurodo, ar lentelėje yra nurodytas (-i) stulpelis (-iai).


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Nurodo, ar <code>table</code> yra nurodytas (-i) stulpelis (-iai), <code>columns</code>. Pateikiama <code>true</code>, jei lentelėje yra stulpelis (-iai); priešingu atveju pateikiama <code>false</code>.


## Examples

### Example #1 
Nustatykite, ar lentelėje yra stulpelis [Name].
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
Raskite, ar lentelėje yra stulpelis [Name] ir [PhoneNumber].
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
