---
title: Time.Hour
---

# Time.Hour


## Description

Returnează componenta hour.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Returnează componenta hour a valorii <code>time</code>, <code>datetime</code> sau <code>datetimezone</code> furnizate, <code>dateTime</code>.


## Examples

### Example #1 
Găsiţi ora din #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
