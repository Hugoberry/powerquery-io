---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Ilmaisee, onko tämä päivämäärä seuraavan päivän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan päivän aikana.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` seuraavan päivän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan päivän aikana.

-   `dateTime`: arvioitava `date`\-, `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, onko nykyisen järjestelmän ajan jälkeen oleva päivä seuraavana päivänä.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
