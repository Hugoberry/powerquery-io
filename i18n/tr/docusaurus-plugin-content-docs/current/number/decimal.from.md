---
title: Decimal.From
---

# Decimal.From


Verilen değerden Ondalık bir değer oluşturur.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Verilen `value` değerinden Decimal `number` değerini döndürür. Verilen `value` değeri `null` olduğunda `Decimal.From` `null` döndürür. Verilen `value` değeri Decimal aralığında `number` olduğunda `value` döndürülür; aksi takdirde hata döndürülür. Verilen `value` değeri başka bir türde olduğunda, önce `Number.FromText` kullanılarak `number` değerine dönüştürülür. Ayrıca, isteğe bağlı bir `culture` sağlanabilir (örneğin "tr-TR").


## Examples

### Example #1
`"4.5"` değerinin Ondalık `number` değerini verir.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
