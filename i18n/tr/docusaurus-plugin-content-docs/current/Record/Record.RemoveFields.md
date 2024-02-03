---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Belirtilen alanları girdi kaydından kaldırır.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

<code>fields</code> listesinde belirtilen tüm alanları <code>record</code> girdisinden kaldıran bir kayıt döndürür. Belirtilen alan yoksa, özel durum oluşur.


## Examples

### Example #1 
Kayıttan &#34;Price&#34; alanını kaldırır.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Kayıttan &#34;Price&#34; ve &#34;Item&#34; alanlarını kaldırır.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
