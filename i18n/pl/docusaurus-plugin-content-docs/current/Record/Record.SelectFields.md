---
title: Record.SelectFields
---

# Record.SelectFields


Zwraca rekord zawierający tylko określone pola.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Zwraca rekord zawierający tylko te pola z rekordu wejściowego <code>record</code>, które zostały określone na liście <code>fields</code>.


## Examples

### Example #1 
Wybierz pola „Item” i „Price” w rekordzie.
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
