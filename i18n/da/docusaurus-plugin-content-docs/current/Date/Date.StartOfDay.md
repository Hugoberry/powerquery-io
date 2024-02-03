---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Returnerer starten af dagen.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Returnerer starten på den dag, der repræsenteres af <code>dateTime</code>.    <code>dateTime</code> skal være en værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>.


## Examples

### Example #1 
Find starten dagen for 10. oktober 2011 klokken 08:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
