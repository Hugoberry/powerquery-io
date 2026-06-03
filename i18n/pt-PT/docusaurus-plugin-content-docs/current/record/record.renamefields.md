---
title: Record.RenameFields
---

# Record.RenameFields


Aplica mudanças de nome a partir de uma lista com o formato \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devolve um registo depois de mudar os campos existentes na entrada `record` para os novos nomes de campos especificados na lista `renames`. Para efetuar várias mudanças de nome, é possível utilizar uma lista aninhada (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Mudar o nome do campo "UnitPrice" para "Price" no registo.
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
Mudar os nomes dos campos "UnitPrice" para "Preço" e "OrderNum" para "OrderID" no registo.
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
