---
title: Record.SelectFields
---

# Record.SelectFields


Vrátí záznam, který obsahuje pouze zadaná pole.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Vrátí záznam, který obsahuje pouze pole určená v seznamu `fields` ze vstupu `record`.


## Examples

### Example #1
Vybere pole Item a Price v záznamu.
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
