---
title: Table.HasColumns
---

# Table.HasColumns


Nurodo, ar lentelėje yra nurodytas (-i) stulpelis (-iai).


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Remarks

Nurodo, ar `table` yra nurodytas (-i) stulpelis (-iai), `columns`. Pateikiama `true`, jei lentelėje yra stulpelis (-iai); priešingu atveju pateikiama `false`.


## Examples

### Example #1
Nustatykite, ar lentelėje yra stulpelis \[Name\].
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
Raskite, ar lentelėje yra stulpelis \[Name\] ir \[PhoneNumber\].
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
