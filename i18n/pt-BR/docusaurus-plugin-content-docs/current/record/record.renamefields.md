---
title: Record.RenameFields
---

# Record.RenameFields


Aplica renomeações de uma lista no formato \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retorna um registro após renomear campos na entrada `record` para novos nomes de campo especificados na lista `renames`. Para várias renomeação, uma lista aninhada pode ser usada (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Renomear o campo "UnitPrice" para "Price" no registro.
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
Renomear o campo "UnitPrice" para "Price" e "OrderNum" para "OrderID" no registro.
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
