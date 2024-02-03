---
title: Time.Minute
---

# Time.Minute


## Description

Returnează componenta minute.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Returnează componenta minute din valoarea <code>time</code>, <code>datetime</code> sau <code>datetimezone</code> furnizată, <code>dateTime</code>.


## Examples

### Example #1 
Găsiţi minutul din #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
