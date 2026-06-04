---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Ilmaisee, onko tämä datetime-arvo seuraavan minuutin aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan minuutin aikana.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` seuraavan minuutin aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan minuutin aikana.

-   `dateTime`: arvioitava `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, onko minuutti nykyisen järjestelmän ajan jälkeen seuraavan minuutin aikana.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
