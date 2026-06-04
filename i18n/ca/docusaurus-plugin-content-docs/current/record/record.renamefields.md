---
title: Record.RenameFields
---

# Record.RenameFields


Aplica canvis de nom a partir d'una llista amb la forma \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retorna un registre després de canviar el nom dels camps a l'entrada `record` pels noms de camp nous especificats a la llista `renames`. Per a diversos canvis de nom es pot utilitzar una llista imbricada (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Canvia el nom del camp "UnitPrice" per "Price" del registre.
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
Canvia els camps "UnitPrice" per "Price" i "OrderNum" per "OrderID" del registre.
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
