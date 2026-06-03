---
title: Date.AddDays
---

# Date.AddDays


Belirtilen günleri tarihe ekler.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

`numberOfDays` günü `datetime` değeri olan `dateTime` öğesine eklemeden `date`, `datetime` veya `datetimezone` sonucunu döndürür.

-   `dateTime`: Günlerin eklendiği `date`, `datetime` veya `datetimezone` değeri.
-   `numberOfDays`: Eklenecek gün sayısı.


## Examples

### Example #1
14/05/2011 tarihini temsil eden `date`, `datetime` veya `datetimezone` değerine 5 gün ekler.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
