---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Bu tarihin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli yıl sırasında oluşup oluşmadığını ve geçerli gün içinde veya ondan önce olup olmadığını gösterir.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

`dateTime` verilen datetime değerinin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli yıl sırasında oluşup oluşmadığını ve geçerli gün içinde veya ondan önce olup olmadığını gösterir.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinin yıl başından bugüne kadarki dönem içinde olup olmadığını belirler.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
