---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


64 bit uzunluğundaki bir sayıdan datetime oluşturur.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

`fileTime` değerinden `datetime` oluşturur ve bunu yerel saat dilimine dönüştürür. Dosya zamanı, 1 Ocak 1601 gece yarısı 12:00'den bu yana 100 nano saniyelik aralıkların sayısını temsil eden bir Windows dosya zamanı değeridir. (C.E.) Eşgüdümlü Evrensel Saat (UTC).


## Examples

### Example #1
`129876402529842245` değerini bir datetime değerine dönüştürür.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
