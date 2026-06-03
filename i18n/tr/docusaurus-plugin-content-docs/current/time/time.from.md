---
title: Time.From
---

# Time.From


Verilen değerden saat oluşturur.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Verilen `value` değerinden bir `time` değeri döndürür. Ayrıca, isteğe bağlı bir `culture` sağlanabilir (ör. "tr-TR"). Verilen `value` `null` olduğunda `Time.From` `null` döndürür. Verilen `value` `time` olduğunda `value` döndürülür. Aşağıdaki türlerde olan değerler bir `time` değerine dönüştürülebilir:

-   `text`: Metin gösteriminden bir `time` değeri. Ayrıntılar için bkz. `Time.FromText`.
-   `datetime`: `value` değerinin saat bileşeni.
-   `datetimezone`: `value` değerinin yerel tarih saat eşdeğerinin saat bileşeni.
-   `number`: `value` ile ifade edilen tam ve kesirli günlere eşdeğer bir `time`. `value` negatifse veya 1'den büyük ya da 1'e eşitse hata döndürülür.

`value` başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1
`0.7575` değerini bir `time` değerine dönüştürür.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
`#datetime(1899, 12, 30, 06, 45, 12)` değerini bir `time` değerine dönüştürür.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
