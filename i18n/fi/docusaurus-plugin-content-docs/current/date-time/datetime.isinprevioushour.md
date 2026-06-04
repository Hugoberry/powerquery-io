---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Ilmaisee, onko tämä datetime-arvo edellisen tunnin aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan tunnin aikana.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` edellisen tunnin aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan tunnin aikana.

-   `dateTime`: arvioitava `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, onko tunti ennen nykyistä järjestelmän aikaa edellisen tunnin aikana.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
