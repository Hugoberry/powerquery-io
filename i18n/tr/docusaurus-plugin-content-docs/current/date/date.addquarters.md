---
title: Date.AddQuarters
---

# Date.AddQuarters


Belirtilen çeyrekleri tarihe ekler.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

`numberOfQuarters` çeyreği `datetime` değeri olan `dateTime` öğesine eklemeden `date`, `datetime` veya `datetimezone` sonucunu döndürür.

-   `dateTime`: Çeyreklerin eklendiği `date`, `datetime` veya `datetimezone` değeri.
-   `numberOfQuarters`: Eklenecek çeyrek sayısı.


## Examples

### Example #1
14/05/2011 tarihini temsil eden `date`, `datetime` veya `datetimezone` değerine 1 çeyrek ekler.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
