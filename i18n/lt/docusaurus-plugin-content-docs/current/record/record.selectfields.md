---
title: Record.SelectFields
---

# Record.SelectFields


Pateikiamas įrašas, kuriame yra tik nurodyti laukai.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Pateikiamas įrašas, kuriame yra tik laukai, nurodyti sąraše `fields` iš įvesties `record`.


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
