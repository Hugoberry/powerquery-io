---
title: Date.AddDays
---

# Date.AddDays


Lisää määritetyt päivät päivämäärään.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Palauttaa `date`\-, `datetime`\- tai `datetimezone`\-tuloksen siitä, kun `numberOfDays` päivää lisätään `datetime`\-arvoon `dateTime`.

-   `dateTime`: `date`\-, `datetime`\- tai `datetimezone`\-arvo, johon päivät lisätään.
-   `numberOfDays`: lisättävien päivien määrä.


## Examples

### Example #1
Lisää viisi päivää `date`\-, `datetime`\- tai `datetimezone`\-arvoon, joka ilmaisee päivämäärää 14.5.2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
