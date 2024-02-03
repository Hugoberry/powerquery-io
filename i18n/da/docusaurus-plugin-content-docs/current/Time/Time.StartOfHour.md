---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Returnerer starten af timen.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Returnerer starten af timen, der repræsenteres af <code>dateTime</code>.    <code>dateTime</code> skal være en værdi af typen <code>time</code>, <code>datetime</code> eller <code>datetimezone</code>.


## Examples

### Example #1 
Find starten af tidspunktet for 10. oktober 2011, klokken 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
