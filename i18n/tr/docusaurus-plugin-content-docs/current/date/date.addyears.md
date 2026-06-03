---
title: Date.AddYears
---

# Date.AddYears


Belirtilen yılları tarihe ekler.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

`numberOfYears` yılı `datetime` değeri olan `dateTime` öğesine ekleme nedeniyle oluşan `date`, `datetime` veya `datetimezone` sonucunu döndürür.

-   `dateTime`: Yılların eklendiği `date`, `datetime` veya `datetimezone` değeri.
-   `numberOfYears`: Eklenecek yıl sayısı.


## Examples

### Example #1
14/05/2011 tarihini temsil eden `date`, `datetime` veya `datetimezone` değerine 4 yıl ekler.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
14/05/2011 08:15:22 tarih ve saatini temsil eden `date`, `datetime` veya `datetimezone` değerine 10 yıl ekler.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
