---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde bir sonraki gün içinde olup olmadığını gösterir. Geçerli gün içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde bir sonraki gün içinde olup olmadığını gösterir. Geçerli gün içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinden bir sonraki günün sonraki gün içinde olup olmadığını belirler.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
