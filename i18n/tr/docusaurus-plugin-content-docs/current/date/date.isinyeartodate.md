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

<code>dateTime</code> verilen datetime değerinin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli yıl sırasında oluşup oluşmadığını ve geçerli gün içinde veya ondan önce olup olmadığını gösterir.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


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
