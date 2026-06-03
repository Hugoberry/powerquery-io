---
title: Date.AddMonths
---

# Date.AddMonths


Belirtilen ayları tarihe ekler.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

`numberOfMonths` ayı `datetime` değeri olan `dateTime` öğesine ekleme nedeniyle oluşan `date`, `datetime` veya `datetimezone` sonucunu döndürür.

-   `dateTime`: Ayların eklendiği `date`, `datetime` veya `datetimezone` değeri.
-   `numberOfMonths`: Eklenecek ay sayısı.


## Examples

### Example #1
14/05/2011 tarihini temsil eden `date`, `datetime` veya `datetimezone` değerine 5 ay ekler.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
14/05/2011 08:15:22 tarih ve saatini temsil eden `date`, `datetime` veya `datetimezone` değerine 18 ay ekler.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
