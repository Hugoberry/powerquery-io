---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Returnerar ett tal som anger vilket kvartal på året som datumet infaller under.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Returnerar ett tal från 1 till 4 som anger vilket kvartal på året som datumet `dateTime` infaller under. `dateTime` kan vara ett `date`\-, `datetime`\- eller `datetimezone`\-värde.


## Examples

### Example #1
Hitta det kvartal under året som datumet #date(2011, 12, 31) infaller under.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
