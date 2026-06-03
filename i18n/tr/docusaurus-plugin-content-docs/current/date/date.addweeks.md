---
title: Date.AddWeeks
---

# Date.AddWeeks


Belirtilen haftaları tarihe ekler.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

`numberOfWeeks` haftayı `datetime` değeri olan `dateTime` öğesine eklemeden `date`, `datetime` veya `datetimezone` sonucunu döndürür.

-   `dateTime`: Haftaların eklendiği `date`, `datetime` veya `datetimezone` değeri.
-   `numberOfWeeks`: Eklenecek hafta sayısı.


## Examples

### Example #1
14/05/2011 tarihini temsil eden `date`, `datetime` veya `datetimezone` değerine 2 hafta ekler.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
