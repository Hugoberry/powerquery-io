---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


Ilmaisee, onko tämä datetime-arvo seuraavan sekunnin aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan sekunnin aikana.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` seuraavan sekunnin aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan sekunnin aikana.

-   `dateTime`: arvioitava `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, onko sekunti nykyisen järjestelmän ajan jälkeen seuraavan sekunnin aikana.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
