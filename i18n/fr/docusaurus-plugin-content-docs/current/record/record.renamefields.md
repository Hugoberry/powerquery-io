---
title: Record.RenameFields
---

# Record.RenameFields


Attribue de nouveaux noms à partir d'une liste dans le formulaire \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retourne un enregistrement après avoir renommé les champs dans l’entrée `record` avec les nouveaux noms des champs spécifiés dans la liste `renames`. En cas de renommages multiples, une liste imbriquée peut être utilisé (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Renomme le champ de l'enregistrement "UnitPrice" en "Price".
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
Renomme les champs de l'enregistrement "UnitPrice" en "Price" et "OrderNum" en "OrderID".
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
