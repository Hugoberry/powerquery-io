---
title: Time.Hour
---

# Time.Hour


Returnerar timkomponenten.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Returnerar timkomponenten för angivet `time`\-, `datetime`\- eller `datetimezone`\-värde, `dateTime`.


## Examples

### Example #1
Hitta timmen i #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
