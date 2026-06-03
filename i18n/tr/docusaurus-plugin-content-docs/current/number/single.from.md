---
title: Single.From
---

# Single.From


Verilen değerden Tek değer oluşturur.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Verilen `value` değerinden Single `number` değerini döndürür. Verilen `value` değeri `null` olduğunda `Single.From` `null` döndürür. Verilen `value` değeri Single aralığında `number` olduğunda `value` döndürülür; aksi takdirde hata döndürülür. Verilen `value` değeri başka bir türde olduğunda, önce `Number.FromText` kullanılarak `number` değerine dönüştürülür. Ayrıca, isteğe bağlı bir `culture` sağlanabilir (örneğin "tr-TR").


## Examples

### Example #1
`"1.5"` değerinin Tek `number` değerini verir.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
