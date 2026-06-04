---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Ilmaisee, onko tämä päivämäärä seuraavan kuukauden aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan kuukauden aikana.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` seuraavan kuukauden aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan kuukauden aikana.

-   `dateTime`: arvioitava `date`\-, `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, onko nykyisen järjestelmän ajan jälkeen oleva kuukausi seuraavana kuukautena.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
