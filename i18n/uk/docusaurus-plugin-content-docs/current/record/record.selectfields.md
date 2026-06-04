---
title: Record.SelectFields
---

# Record.SelectFields


Повертає запис, який містить тільки вказані поля.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Повертає запис, який включає тільки поля, вказані у списку `fields`, із вхідного запису `record`.


## Examples

### Example #1
Вибрати поля "Item" і "Price" у записі.
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
