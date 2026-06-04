---
title: Date.AddMonths
---

# Date.AddMonths


Lisää määritetyt kuukaudet päivämäärään.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Palauttaa `date`\-, `datetime`\- tai `datetimezone`\-tuloksen siitä, kun `numberOfMonths` kuukautta lisätään `datetime`\-arvoon `dateTime`.

-   `dateTime`: `date`\-, `datetime`\- tai `datetimezone`\-arvo, johon kuukaudet lisätään.
-   `numberOfMonths`: lisättävien kuukausien määrä.


## Examples

### Example #1
Lisää viisi kuukautta `date`\-, `datetime`\- tai `datetimezone`\-arvoon, joka ilmaisee päivämäärää 14.5.2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Lisää 18 kuukautta `date`\-, `datetime`\- tai `datetimezone`\-arvoon, joka ilmaisee päivämäärää ja aikaa 14.5.2011 8.15.22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
