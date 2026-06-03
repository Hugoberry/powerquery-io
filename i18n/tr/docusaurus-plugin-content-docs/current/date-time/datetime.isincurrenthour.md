---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Bu tarih saat değerinin sistemdeki geçerli tarih ve saat tarafından belirlenen geçerli saatte olup olmadığını gösterir.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin sistemdeki geçerli tarih ve saat tarafından belirlenen geçerli saatte olup olmadığını gösterir.

-   `dateTime`: Değerlendirilmek üzere bir `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinin, geçerli saatte olup olmadığını belirler.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
