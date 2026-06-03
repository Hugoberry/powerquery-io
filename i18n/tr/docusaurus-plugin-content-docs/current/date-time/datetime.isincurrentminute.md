---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Bu tarih saat değerinin sistemdeki geçerli tarih ve saat tarafından belirlenen geçerli dakikada olup olmadığını gösterir.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin sistemdeki geçerli tarih ve saat tarafından belirlenen geçerli dakikada olup olmadığını gösterir.

-   `dateTime`: Değerlendirilmek üzere bir `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinin, geçerli dakikada olup olmadığını belirler.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
