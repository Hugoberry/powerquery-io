---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Ilmaisee, onko tämä datetime-arvo seuraavan minuuttien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan minuutin aikana.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` seuraavan minuuttien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan minuutin aikana.

-   `dateTime`: arvioitava `datetime`\- tai `datetimezone`\-arvo.
-   `minutes`: minuuttien määrä.


## Examples

### Example #1
Selvitä, onko minuutti nykyisen järjestelmän ajan jälkeen seuraavien kahden minuutin aikana.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
