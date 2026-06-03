---
title: Record.TransformFields
---

# Record.TransformFields


Belirtilen dönüşümleri uyguladıktan sonra bir kayıt döndürür.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

`transformOperations` listesinde belirtilen dönüşümleri `record` öğesine uyguladıktan sonra bir kayıt döndürür. Aynı anda bir veya daha fazla alan dönüştürülebilir.

Tek bir alan dönüştürülürken, `transformOperations` öğesinin iki öğe içeren bir liste olması beklenir. `transformOperations` içindeki ilk öğe alan adını, `transformOperations` içindeki ikinci öğe ise dönüşüm için kullanılacak işlevi belirtir. Örneğin, `{"Quantity", Number.FromText}`

Birden çok alan dönüştürülürken, `transformOperations` öğesinin her iç listenin bir alan adı ve dönüşüm işlemi çifti olduğu bir listeler listesi olması beklenir. Örneğin, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
"Price" alanını sayıya dönüştürün.
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2
"OrderID" ve "Price" alanlarını sayıya dönüştürün.
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
