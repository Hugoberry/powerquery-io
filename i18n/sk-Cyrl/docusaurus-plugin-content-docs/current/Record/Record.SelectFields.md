---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Vráti záznam, ktorý obsahuje iba zadané polia.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Vráti záznam, ktorý zahŕňa iba polia zadané v zozname <code>fields</code> zo vstupu <code>record</code>.


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
