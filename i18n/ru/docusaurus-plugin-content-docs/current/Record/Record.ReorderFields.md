---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Меняет порядок указанных полей на новый.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Возвращает запись после изменения порядка полей в <code>record</code> согласно порядку, указанному в списке <code>fieldOrder</code>. Значения полей сохраняются, а поля, не указанные в <code>fieldOrder</code>, остаются в исходном положении.


## Examples

### Example #1 
Изменение порядка некоторых полей в записи.
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
