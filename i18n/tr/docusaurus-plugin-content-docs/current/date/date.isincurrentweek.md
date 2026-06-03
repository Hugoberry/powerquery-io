---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Bu tarihin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli hafta sırasında oluşup oluşmadığını gösterir.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

`dateTime` verilen datetime değerinin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli hafta sırasında oluşup oluşmadığını gösterir.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinin geçerli hafta içinde olup olmadığını belirler.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
