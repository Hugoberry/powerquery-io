---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Ilmaisee, onko tämä päivämäärä edellisen vuosien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuoden aikana.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` edellisen vuosien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuoden aikana.

-   `dateTime`: arvioitava `date`\-, `datetime`\- tai `datetimezone`\-arvo.
-   `years`: vuosien määrä.


## Examples

### Example #1
Selvitä, onko vuosi ennen nykyistä järjestelmän aikaa edellisten kahden vuoden aikana.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
