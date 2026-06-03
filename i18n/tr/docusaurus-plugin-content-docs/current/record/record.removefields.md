---
title: Record.RemoveFields
---

# Record.RemoveFields


Belirtilen alanları girdi kaydından kaldırır.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

`fields` listesinde belirtilen tüm alanları `record` girdisinden kaldıran bir kayıt döndürür. Belirtilen alan mevcut değilse, bir hata oluşur.


## Examples

### Example #1
Kayıttan "Price" alanını kaldırır.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Kayıttan "Price" ve "Item" alanlarını kaldırır.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
