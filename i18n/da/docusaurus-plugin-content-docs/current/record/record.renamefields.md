---
title: Record.RenameFields
---

# Record.RenameFields


Anvender nye navne fra en liste i formatet \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returnerer en post efter at have omdøbt felter i inputtet `record` til de nye feltnavne, der er angivet på listen `renames`. For flere omdøbninger kan der bruges en indlejret liste (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Omdøb feltet "UnitPrice" til "Price" fra posten.
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
Omdøb felterne "UnitPrice" til "Price" og "OrderNum" til "OrderID" fra posten.
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
