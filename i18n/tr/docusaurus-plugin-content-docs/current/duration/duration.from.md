---
title: Duration.From
---

# Duration.From


Verilen değerden bir süre oluşturur.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Verilen değerden bir süre değeri döndürür.

-   `value`: Sürenin türetildiği değer. Verilen `value` `null` ise, bu işlev `null` değerini döndürür. Verilen `value` `duration` ise, `value` değeri döndürülür. Şu türdeki değerler bir `duration` değerine dönüştürülebilir:
    -   `text`: Metin türündeki geçen süre biçimlerinden (d.h:m:s) türetilen `duration` değeri. Ayrıntılar için `Duration.FromText` bölümüne bakın.
    -   `number`: `value` ile ifade edilen tam sayı ve kesir cinsinden gün sayısına eşdeğer `duration`.

`value` başka bir türdeyse, bir hata döndürülür.


## Examples

### Example #1
`2.525` değerini bir `duration` değerine dönüştürür.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
`"2.05:55:20.34567"` metin değerini bir `duration` değerine dönüştürün.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
