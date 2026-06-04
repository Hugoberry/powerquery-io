---
title: Table.Column
---

# Table.Column


Norādītā tabulas datu kolonna tiek atgriezta saraksta formātā.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Remarks

Norādītā tabulas `table` datu kolonna `column` tiek atgriezta saraksta formātā.


## Examples

### Example #1
Iegūstiet tabulas kolonnā \[Name\] ietvertos datus.
```powerquery
Table.Column(
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
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
