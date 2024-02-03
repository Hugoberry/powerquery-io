---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Pateikiamas įrašas, kuriame yra tik nurodyti laukai.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Pateikiamas įrašas, kuriame yra tik laukai, nurodyti sąraše <code>fields</code> iš įvesties <code>record</code>.


## Examples

### Example #1 
Pasirinkite laukus „Item“ ir „Price“ įraše.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
