---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, önceki hafta içinde olup olmadığını gösterir. Geçerli hafta içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki hafta içinde olup olmadığını gösterir. Geçerli hafta içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinden bir önceki haftanın önceki hafta içinde olup olmadığını belirler.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
