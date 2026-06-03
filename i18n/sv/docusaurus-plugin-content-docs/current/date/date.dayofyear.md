---
title: Date.DayOfYear
---

# Date.DayOfYear


Returnerar ett tal mellan 1 och 366 som representerar dagen på året.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Returnerar ett tal som representerar dagen på året i angivet `date`\-, `datetime`\- eller `datetimezone`\-värde, `dateTime`.


## Examples

### Example #1
Dagen på året den 1 mars 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
