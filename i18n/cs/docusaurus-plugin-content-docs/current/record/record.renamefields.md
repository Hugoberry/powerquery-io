---
title: Record.RenameFields
---

# Record.RenameFields


Použije přejmenování ze seznamu ve formátu \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Vrátí záznam po přejmenování polí ve vstupu `record` na nové názvy zadané v seznamu `renames`. K provedení více přejmenování lze použít vnořený seznam (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Přejmenuje pole UnitPrice v záznamu na pole Price.
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
Přejmenuje pole UnitPrice a OrderNum v záznamu na pole Price a OrderID.
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
