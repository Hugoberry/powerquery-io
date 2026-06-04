---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Ilmaisee, onko tämä päivämäärä edellisen vuoden aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuoden aikana.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` edellisen vuoden aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuoden aikana.

-   `dateTime`: arvioitava `date`\-, `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, onko nykyistä järjestelmän aikaa ennen oleva vuosi edellisenä vuotena.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
