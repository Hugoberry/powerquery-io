---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde bir sonraki hafta içinde olup olmadığını gösterir. Geçerli hafta içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde bir sonraki hafta içinde olup olmadığını gösterir. Geçerli hafta içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinden bir sonraki haftanın sonraki hafta içinde olup olmadığını belirler.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
