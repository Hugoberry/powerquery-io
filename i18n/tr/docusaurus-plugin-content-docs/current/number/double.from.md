---
title: Double.From
---

# Double.From


Verilen değerden Çift değer oluşturur.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Verilen `value` değerinden Double `number` değerini döndürür. Verilen `value` değeri `null` olduğunda `Double.From` `null` döndürür. Verilen `value` değeri Double aralığında `number` olduğunda `value` döndürülür; aksi takdirde hata döndürülür. Verilen `value` değeri başka bir türde olduğunda, önce `Number.FromText` kullanılarak `number` değerine dönüştürülür. Ayrıca, isteğe bağlı bir `culture` sağlanabilir (örneğin "tr-TR").


## Examples

### Example #1
`"4"` değerinin Çift `number` değerini verir.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
