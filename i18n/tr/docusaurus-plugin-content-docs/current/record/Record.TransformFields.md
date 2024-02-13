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

<code>transformOperations</code> listesinde belirtilen dönüşümleri <code>record</code> öğesine uyguladıktan sonra bir kayıt döndürür.    Aynı anda bir veya daha fazla alan dönüştürülebilir.      <div>Tek bir alan dönüştürülürken, <code>transformOperations</code> öğesinin iki öğe içeren bir liste olması beklenir. <code>transformOperations</code> içindeki ilk öğe alan adını, <code>transformOperations</code> içindeki ikinci öğe ise dönüşüm için kullanılacak işlevi belirtir. Örneğin, <code>\{"Quantity", Number.FromText}</code></div>      <div>Birden çok alan dönüştürülürken, <code>transformOperations</code> öğesinin her iç listenin bir alan adı ve dönüşüm işlemi çifti olduğu bir listeler listesi olması beklenir. Örneğin, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
&#34;Price&#34; alanını sayıya dönüştürün.
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
&#34;OrderID&#34; ve &#34;Price&#34; alanlarını sayıya dönüştürün.
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
