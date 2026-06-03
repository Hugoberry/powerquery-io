---
title: Time.Second
---

# Time.Second


Returnerar sekundkomponenten.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Returnerar sekundkomponenten för angivet `time`\-, `datetime`\- eller `datetimezone`\-värde, `dateTime`.


## Examples

### Example #1
Hitta sekundvärdet från ett datum- och tidsvärde.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
