---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Použije premenovania zo zoznamu vo formáte \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Vráti záznam po premenovaní polí vo vstupe <code>record</code> na nové názvy polí zadané v zozname <code>renames</code>. Pre viaceré premenovania možno použiť vnorený zoznam (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Premenujte pole UnitPrice na Price zo záznamu.
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
Premenujte pole UnitPrice na Price a pole OrderNum na OrderID zo záznamu.
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
