---
title: Date.StartOfDay
---

# Date.StartOfDay


Gün başlangıcını döndürür.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

`dateTime`tarafından temsil edilen gün başlangıcını döndürür. `dateTime`, bir `date`, `datetime` veya `datetimezone` değeri olmalıdır.


## Examples

### Example #1
10 Ekim 2011, 08:00 için günün başlangıcını bulun.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
