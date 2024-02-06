---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, önceki birkaç yıl içinde olup olmadığını gösterir. Geçerli yıl içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki birkaç yıl içinde olup olmadığını gösterir. Geçerli yıl içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>years</code>: Yıl sayısı.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden önceki yılın, önceki iki yıl içinde olup olmadığını belirler.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
