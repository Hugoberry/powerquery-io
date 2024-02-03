---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Změní pořadí zadaných polí.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Vrátí záznam po změně pořadí polí v záznamu <code>record</code> podle pořadí určeného v seznamu <code>fieldOrder</code>. Hodnoty polí jsou zachovány a pole, která nejsou uvedena v seznamu <code>fieldOrder</code>, jsou ponechána na původních pozicích.


## Examples

### Example #1 
Změní pořadí některých polí v záznamu.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
