---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, önceki yıl içinde olup olmadığını gösterir. Geçerli yıl içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki yıl içinde olup olmadığını gösterir. Geçerli yıl içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden bir önceki yılın önceki yıl içinde olup olmadığını belirler.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
