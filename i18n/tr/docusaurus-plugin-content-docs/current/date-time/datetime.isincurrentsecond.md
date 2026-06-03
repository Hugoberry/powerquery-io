---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Bu tarih saat değerinin sistemdeki geçerli tarih ve saat tarafından belirlenen geçerli saniyede olup olmadığını gösterir.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin sistemdeki geçerli tarih ve saat tarafından belirlenen geçerli saniyede olup olmadığını gösterir.

-   `dateTime`: Değerlendirilmek üzere bir `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinin, geçerli saniyede olup olmadığını belirler.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
