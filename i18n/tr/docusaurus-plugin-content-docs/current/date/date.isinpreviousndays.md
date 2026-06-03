---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, önceki birkaç gün içinde olup olmadığını gösterir. Geçerli gün içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde önceki, birkaç gün içinde olup olmadığını gösterir. Geçerli gün içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.
-   `days`: Gün sayısı.


## Examples

### Example #1
Geçerli sistem saatinden önceki günün, önceki iki gün içinde olup olmadığını belirler.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
