---
title: Record.ReorderFields
---

# Record.ReorderFields


Belirtilen alanları yeni düzen ile yeniden sıralar.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

<code>record</code> içindeki alanları yeniden sıraladıktan sonra <code>fieldOrder</code> listesinde belirtilen alan sıralamasında bir kayıt döndürür. Alan değerleri korunur ve <code>fieldOrder</code> içinde listelenmeyen alanlar asıl konumlarında bırakılır.


## Examples

### Example #1 
Kayıttaki bazı alanları yeniden sıralar.
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
