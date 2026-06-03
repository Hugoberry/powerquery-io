---
title: Value.NullableEquals
---

# Value.NullableEquals


İki değerin eşit olup olmadığını döndürür.


## Syntax

```powerquery
Value.NullableEquals(
    value1 as any,
    value2 as any,
    optional precision as Precision.Type
) as logical
```


## Remarks

`value1` ya da `value2` bağımsız değişkenlerinden biri null ise null döndürür, aksi halde Value.Equals ile eşdeğer bir değer döndürür.



## Category
Values
