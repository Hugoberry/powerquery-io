---
title: Record.RenameFields
---

# Record.RenameFields


Aplica o(s) renomeamento(s) da lista no formato \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devolve un rexistro despois de renomear campos da entrada `record` aos novos nomes de campo especificados na lista `renames`. Para renomear varios, pódese utilizar unha lista aniñada (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Renomear o campo "UnitPrice" a "Price" do rexistro.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Renomear os campos "UnitPrice" a "Price" e "OrderNum" a "OrderID" do rexistro.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
