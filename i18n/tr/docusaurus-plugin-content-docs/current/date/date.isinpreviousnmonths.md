---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, önceki birkaç ay içinde olup olmadığını gösterir. Geçerli ay içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki birkaç ay içinde olup olmadığını gösterir. Geçerli ay içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.
-   `months`: Ay sayısı.


## Examples

### Example #1
Geçerli sistem saatinden önceki ayın, önceki iki ay içinde olup olmadığını belirler.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
