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

<code>record</code> girdisinden yalnızca <code>fields</code> listesinde belirtilen alanları içeren bir kayıt döndürür.


## Examples

### Example #1 
Kayıttaki &#34;Item&#34; ve &#34;Price&#34; alanlarını seçer.
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
