---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Bu tarihin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli ay sırasında oluşup oluşmadığını gösterir.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

`dateTime` verilen datetime değerinin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli ay sırasında oluşup oluşmadığını gösterir.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinin geçerli ay içinde olup olmadığını belirler.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
