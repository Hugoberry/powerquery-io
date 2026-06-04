---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Ilmaisee, onko tämä päivämäärä edellisen vuosineljännesten määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuosineljänneksen aikana.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` edellisen vuosineljännesien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuosineljänneksen aikana.

-   `dateTime`: arvioitava `date`\-, `datetime`\- tai `datetimezone`\-arvo.
-   `quarters`: vuosineljänneksien määrä.


## Examples

### Example #1
Selvitä, onko vuosineljännes ennen nykyistä järjestelmän aikaa edellisten kahden vuosineljänneksen aikana.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
