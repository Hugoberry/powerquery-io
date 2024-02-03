---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Taikomas pervardijimas (-ai) iš sąrašo formoje \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Pateikiamas įrašas po laukų pervardijimo įvestyje <code>record</code> naujais laukų pavadinimais, nurodytais sąraše <code>renames</code>. Keliems pervardijimams galima naudoti įdėtąjį sąrašą (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Pervardykite lauką „UnitPrice“ į „Price“ įraše.
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
Pervardykite laukus „UnitPrice“ į „Price“ ir „OrderNum“ į „OrderID“ įraše.
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
