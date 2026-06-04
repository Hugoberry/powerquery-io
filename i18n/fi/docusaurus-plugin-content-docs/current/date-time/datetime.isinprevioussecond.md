---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Ilmaisee, onko tämä datetime-arvo edellisen sekunnin aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan sekunnin aikana.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` edellisen sekunnin aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan sekunnin aikana.

-   `dateTime`: arvioitava `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, onko sekunti ennen nykyistä järjestelmän aikaa edellisen sekunnin aikana.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
