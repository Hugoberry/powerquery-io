---
title: Date.Month
---

# Date.Month


## Description

Returnerar månadskomponenten.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Returnerar månadskomponenten för angivet <code>datetime</code>-värde, <code>dateTime</code>.


## Examples

### Example #1 
Hitta månaden i #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
