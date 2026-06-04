---
title: Time.Hour
---

# Time.Hour


Palauttaa tuntiosan.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Palauttaa annetun `time`\-, `datetime`\- tai `datetimezone`\-arvon `dateTime` tuntiosan.


## Examples

### Example #1
Selvitä tunti kohteessa #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
