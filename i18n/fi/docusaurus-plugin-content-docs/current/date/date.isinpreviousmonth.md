---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


Ilmaisee, onko tämä päivämäärä edellisen kuukauden aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan kuukauden aikana.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` edellisen kuukauden aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan kuukauden aikana.

-   `dateTime`: arvioitava `date`\-, `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, onko nykyistä järjestelmän aikaa ennen oleva kuukausi edellisenä kuukautena.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
