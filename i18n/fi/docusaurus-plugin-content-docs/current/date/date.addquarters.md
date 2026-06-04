---
title: Date.AddQuarters
---

# Date.AddQuarters


Lisää määritetyt vuosineljännekset päivämäärään.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Palauttaa `date`\-, `datetime`\- tai `datetimezone`\-tuloksen siitä, kun `numberOfQuarters` vuosineljännestä lisätään `datetime`\-arvoon `dateTime`.

-   `dateTime`: `date`\-, `datetime`\- tai `datetimezone`\-arvo, johon vuosineljännekset lisätään.
-   `numberOfQuarters`: lisättävien vuosineljännesten määrä.


## Examples

### Example #1
Lisää yksi vuosineljännes `date`\-, `datetime`\- tai `datetimezone`\-arvoon, joka ilmaisee päivämäärää 14.5.2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
