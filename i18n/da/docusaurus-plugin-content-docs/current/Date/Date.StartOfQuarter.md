---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Returnerer starten af kvartalet.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Returnerer starten af det kvartal, der indeholder <code>dateTime</code>.    <code>dateTime</code> skal være en værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>.


## Examples

### Example #1 
Find slutningen af kvartalet for 10. oktober 2011, klokken 08:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
