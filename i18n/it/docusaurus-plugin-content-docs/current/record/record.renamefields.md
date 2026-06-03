---
title: Record.RenameFields
---

# Record.RenameFields


Applica la ridenominazione da un elenco nel formato \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Restituisce un record dopo la ridenominazione dei campi dell'input `record` nei nuovi nomi campo specificati nell'elenco `renames`. Per effettuare più ridenominazioni, è possibile utilizzare un elenco annidato (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Rinominare il campo "UnitPrice" in "Price" dal record.
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
Rinominare i campi "UnitPrice" in "Price" e "OrderNum" in "OrderID" dal record.
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
