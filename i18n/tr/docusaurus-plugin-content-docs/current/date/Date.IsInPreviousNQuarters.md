---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, önceki üç aylık dönemlerde olup olmadığını gösterir. Geçerli üç aylık dönem içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki üç aylık dönemlerde olup olmadığını gösterir. Geçerli üç aylık dönem içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>quarters</code>: Üç aylık dönem sayısı.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden önceki üç aylık dönemin, önceki iki üç aylık dönem içinde olup olmadığını belirler.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
