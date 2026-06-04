---
title: Table.IsEmpty
---

# Table.IsEmpty


Označuje, ali tabela vsebuje vrstice.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Označuje, ali tabela `table` vsebuje vrstice. Vrne `true`, če ni vrstic, (tj. tabela je prazna), sicer vrne `false`.


## Examples

### Example #1
Ugotovite, ali je tabela prazna.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2
Ugotovite, ali je tabela `({})` prazna.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
