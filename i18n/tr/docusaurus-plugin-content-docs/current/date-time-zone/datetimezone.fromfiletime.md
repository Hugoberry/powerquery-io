---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


64 bit uzunluğundaki bir sayıdan datetimezone oluşturur.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

`fileTime` değerinden bir `datetimezone` değeri oluşturur ve bu değeri yerel saat dilimine dönüştürür. filetime, 1 Ocak 1601 M.S. (C.E.) Eşgüdümlü Evrensel Saat (UTC) ile gece 12:00'den itibaren geçen 100 nanosaniyelik aralık sayısını temsil eden bir Windows dosya zamanı değeridir.


## Examples

### Example #1
`129876402529842245` değerini bir datetimezone değerine dönüştürür.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
