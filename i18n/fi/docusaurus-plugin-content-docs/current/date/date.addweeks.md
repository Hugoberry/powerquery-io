---
title: Date.AddWeeks
---

# Date.AddWeeks


Lisää määritetyt viikot päivämäärään.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Palauttaa `date`\-, `datetime`\- tai `datetimezone`\-tuloksen siitä, kun `numberOfWeeks` viikkoa lisätään `datetime`\-arvoon `dateTime`.

-   `dateTime`: `date`\-, `datetime`\- tai `datetimezone`\-arvo, johon viikot lisätään.
-   `numberOfWeeks`: lisättävien viikkojen määrä.


## Examples

### Example #1
Lisää kaksi viikkoa `date`\-, `datetime`\- tai `datetimezone`\-arvoon, joka ilmaisee päivämäärää 14.5.2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
