---
title: Table.HasColumns
---

# Table.HasColumns


Označuje, ali tabela vsebuje navedene stolpce.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Remarks

Označuje, ali tabela `table` vsebuje navedene stolpce, `columns`. Vrne `true`, če tabela vsebuje stolpce, sicer vrne `false`.


## Examples

### Example #1
Ugotovite, ali tabela vsebuje stolpec \[Ime\].
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
Ugotovite, ali tabela vsebuje stolpca \[Ime\] in \[TelefonskaŠtevilka\].
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
