---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Gün başlangıcını döndürür.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

<code>dateTime</code>tarafından temsil edilen gün başlangıcını döndürür.    <code>dateTime</code>, bir <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri olmalıdır.


## Examples

### Example #1 
10 Ekim 2011, 08:00 için günün başlangıcını bulun.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
