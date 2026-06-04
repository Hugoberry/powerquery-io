---
title: Record.SelectFields
---

# Record.SelectFields


Vráti záznam, ktorý obsahuje iba zadané polia.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Vráti záznam, ktorý zahŕňa iba polia zadané v zozname `fields` zo vstupu `record`.


## Examples

### Example #1
Vyberte v zázname polia Item a Price.
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
