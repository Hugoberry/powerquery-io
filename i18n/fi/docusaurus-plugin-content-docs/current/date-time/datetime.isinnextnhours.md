---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Ilmaisee, onko tämä datetime-arvo seuraavan tuntien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan tunnin aikana.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` seuraavan tuntien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan tunnin aikana.

-   `dateTime`: arvioitava `datetime`\- tai `datetimezone`\-arvo.
-   `hours`: tuntien määrä.


## Examples

### Example #1
Selvitä, onko tunti nykyisen järjestelmän ajan jälkeen seuraavien kahden tunnin aikana.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
