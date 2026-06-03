---
title: DateTime.From
---

# DateTime.From


Verilen değerden bir datetime oluşturur.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Verilen `value` değerinden bir `datetime` değeri döndürür. Ayrıca, isteğe bağlı bir `culture` sağlanabilir (ör. "tr-TR"). Verilen `value` `null` ise `DateTime.From` `null` döndürür. Verilen `value` `datetime` ise `value` döndürülür. Aşağıdaki türde olan değerler bir `datetime` değerine dönüştürülebilir:

-   `text`: Metinsel gösterimden bir `datetime` değeri. Ayrıntılar için bkz. `DateTime.FromText`.
-   `date`: Tarih bileşeni olarak `value` ve saat bileşeni olarak `00:00:00` içeren bir `datetime`.
-   `datetimezone`: `value` değerinin yerel `datetime` eşdeğeri.
-   `time`: Tarih bileşeni olarak `0` OLE Otomasyon Tarihinin tarih eşdeğeri ve saat bileşeni olarak `value` içeren bir `datetime`.
-   `number`: `value` ile ifade edilen OLE Otomasyon Tarihinin `datetime` eşdeğeri.

`value` başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1
`#time(06, 45, 12)` değerini bir `datetime` değerine dönüştürür.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
`#date(1975, 4, 4)` değerini bir `datetime` değerine dönüştürür.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
