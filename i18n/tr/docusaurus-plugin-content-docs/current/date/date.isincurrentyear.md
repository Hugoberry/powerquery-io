---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Bu tarihin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli yıl sırasında oluşup oluşmadığını gösterir.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

`dateTime` verilen datetime değerinin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli yıl sırasında oluşup oluşmadığını gösterir.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinin geçerli yıl içinde olup olmadığını belirler.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
