---
title: Record.RenameFields
---

# Record.RenameFields


Aplica renomeações de uma lista no formato \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retorna um registro após renomear campos na entrada <code>record</code> para novos nomes de campo especificados na lista <code>renames</code>. No caso de várias renomeações, uma lista aninhada pode ser usada (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Renomear o campo &#34;UnitPrice&#34; para &#34;Price&#34; no registro.
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
Renomear o campo &#34;UnitPrice&#34; para &#34;Price&#34; e &#34;OrderNum&#34; para &#34;OrderID&#34; no registro.
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
