---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Past naamswijzigingen vanuit een lijst toe in de vorm \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Retourneert een record na het wijzigen van veldnamen in de invoer <code>record</code> naar de nieuwe veldnamen die zijn opgegeven in de lijst <code>renames</code>. Bij het wijzigen van meerdere veldnamen kan een geneste lijst (\{ \{old1, new1}, \{old2, new2} } worden gebruikt.


## Examples

### Example #1 
Vanuit de record de naam van het veld UnitPrice wijzigen in Price.
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
Vanuit de record de naam van het veld UnitPrice wijzigen in Price en de naam van het veld OrderNum in OrderID.
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
