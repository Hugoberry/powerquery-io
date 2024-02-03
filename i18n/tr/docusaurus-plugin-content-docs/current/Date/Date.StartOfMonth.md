---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Ay başlangıcını döndürür.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> içeren ay başlangıcını döndürür.     <code>dateTime</code>, bir <code>date</code> veya <code>datetime</code> değeri olmalıdır.


## Examples

### Example #1 
10 Ekim 2011, 08:10:32 için ay başlangıcını bulun.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
