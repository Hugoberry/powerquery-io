---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Bu tarihin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli çeyrek sırasında oluşup oluşmadığını gösterir.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

`dateTime` verilen datetime değerinin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli çeyrek sırasında oluşup oluşmadığını gösterir.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinin geçerli çeyrek içinde olup olmadığını belirler.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
