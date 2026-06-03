---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Bu tarihin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli gün sırasında oluşup oluşmadığını gösterir.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

`dateTime` verilen datetime değerinin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli gün sırasında oluşup oluşmadığını gösterir.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinin geçerli gün içinde olup olmadığını belirler.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
