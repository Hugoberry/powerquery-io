---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, önceki birkaç hafta içinde olup olmadığını gösterir. Geçerli hafta içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki birkaç hafta içinde olup olmadığını gösterir. Geçerli hafta içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>weeks</code>: Hafta sayısı.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden önceki haftanın, önceki iki hafta içinde olup olmadığını belirler.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
