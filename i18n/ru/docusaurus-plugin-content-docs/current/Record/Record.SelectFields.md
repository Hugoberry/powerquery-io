---
title: Record.SelectFields
---

# Record.SelectFields


Возвращает запись, которая содержит только заданные поля.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Возвращает запись, которая включает только поля, указанные в списке <code>fields</code>, из входных данных <code>record</code>.


## Examples

### Example #1 
Выбор полей Item и Price в записи.
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
