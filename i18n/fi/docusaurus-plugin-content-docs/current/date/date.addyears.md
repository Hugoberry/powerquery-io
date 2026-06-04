---
title: Date.AddYears
---

# Date.AddYears


Lisää määritetyt vuodet päivämäärään.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Palauttaa `date`\-, `datetime`\- tai `datetimezone`\-tuloksen siitä, kun `numberOfYears` lisätään `datetime`\-arvoon `dateTime`.

-   `dateTime`: `date`\-, `datetime`\- tai `datetimezone`\-arvo, johon vuodet lisätään.
-   `numberOfYears`: lisättävien vuosien määrä.


## Examples

### Example #1
Lisää neljä vuotta `date`\-, `datetime`\- tai `datetimezone`\-arvoon, joka ilmaisee päivämäärää 14.5.2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Lisää 10 vuotta `date`\-, `datetime`\- tai `datetimezone`\-arvoon, joka ilmaisee päivämäärää ja aikaa 14.5.2011 8.15.22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
