---
title: Record.SelectFields
---

# Record.SelectFields


Тек көрсетілген өрістерді қамтитын жазбаны қайтарады.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Кіріс `record` ішінен тек `fields` тізімінде көрсетілген өрістерді қамтитын жазбаны қайтарады.


## Examples

### Example #1
Жазбадағы "Item" және "Price" өрістерін таңдау.
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
