---
title: Time.Minute
---

# Time.Minute


Palauttaa minuuttiosan.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Palauttaa annetun `time`\-, `datetime`\- tai `datetimezone`\-arvon `dateTime` minuuttiosan.


## Examples

### Example #1
Selvitä minuuttikohteessa #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
