---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Palauttaa luvun, joka ilmaisee, millä vuoden vuosineljänneksellä päivämäärä on.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Palauttaa luvun 1–4, joka ilmaisee, minä vuoden vuosineljänneksenä päivämäärä `dateTime` on. `dateTime` voi olla `date`\-, `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, millä vuoden vuosineljänneksellä päivämäärä #date(2011, 12, 31) on.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
