---
title: Table.HasColumns
---

# Table.HasColumns


Wskazuje, czy tabela zawiera określone kolumny.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Remarks

Wskazuje, czy tabela <code>table</code> zawiera określone kolumny (<code>columns</code>). Zwraca wartość <code>true</code>, jeśli tabela zawiera te kolumny, w przeciwnym razie zwraca wartość <code>false</code>.


## Examples

### Example #1 
Ustal, czy tabela zawiera kolumnę [Name].
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
Ustal, czy tabela zawiera kolumny [Name] i [PhoneNumber].
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
