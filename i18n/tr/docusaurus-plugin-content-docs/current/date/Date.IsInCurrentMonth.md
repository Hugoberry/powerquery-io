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

<code>dateTime</code> verilen datetime değerinin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli ay sırasında oluşup oluşmadığını gösterir.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


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
