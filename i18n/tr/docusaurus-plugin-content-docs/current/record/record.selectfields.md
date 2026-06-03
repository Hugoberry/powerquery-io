---
title: Record.SelectFields
---

# Record.SelectFields


Yalnızca belirtilen alanları içeren bir kayıt döndürür.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

`record` girdisinden yalnızca `fields` listesinde belirtilen alanları içeren bir kayıt döndürür.


## Examples

### Example #1
Kayıttaki "Item" ve "Price" alanlarını seçer.
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
