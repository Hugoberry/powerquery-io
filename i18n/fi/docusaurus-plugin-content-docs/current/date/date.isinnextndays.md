---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Ilmaisee, onko tämä päivämäärä seuraavan päivien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan päivän aikana.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` seuraavan päivien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan päivän aikana.

-   `dateTime`: arvioitava `date`\-, `datetime`\- tai `datetimezone`\-arvo.
-   `days`: päivien määrä.


## Examples

### Example #1
Selvitä, onko päivä nykyisen järjestelmän ajan jälkeen seuraavien kahden päivän aikana.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
