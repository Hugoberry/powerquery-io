---
title: Time.Minute
---

# Time.Minute


Returnerar minutkomponenten.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Returnerar minutkomponenten för angivet `time`\-, `datetime`\- eller `datetimezone`\-värde, `dateTime`.


## Examples

### Example #1
Hitta minuten i #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
