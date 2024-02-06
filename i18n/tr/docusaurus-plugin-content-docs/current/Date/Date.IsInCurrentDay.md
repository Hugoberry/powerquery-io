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

<code>dateTime</code> verilen datetime değerinin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli gün sırasında oluşup oluşmadığını gösterir.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


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
