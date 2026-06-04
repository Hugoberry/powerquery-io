---
title: Table.HasColumns
---

# Table.HasColumns


Tiek norādīts, vai tabulā ir ietverta(-s) norādītā(-s) kolonna(-s).


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Remarks

Tiek norādīts, vai `table` ietver norādīto(-ās) kolonnu(-as) `columns`. Tiek atgriezta vērtība `true`, ja tabulā ir ietverta(-s) kolonna(-s); pretējā gadījumā tiek atgriezta vērtība `false`.


## Examples

### Example #1
Nosakiet, vai tabulā ir kolonna \[Name\].
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
Uzziniet, vai tabulā ir kolonna \[Name\] un \[PhoneNumber\].
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
