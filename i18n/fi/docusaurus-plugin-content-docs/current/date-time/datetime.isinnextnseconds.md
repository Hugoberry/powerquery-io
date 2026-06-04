---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Ilmaisee, onko tämä datetime-arvo seuraavan sekuntien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan sekunnin aikana.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` seuraavan sekuntien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan sekunnin aikana.

-   `dateTime`: arvioitava `datetime`\- tai `datetimezone`\-arvo.
-   `seconds`: sekuntien määrä.


## Examples

### Example #1
Selvitä, onko sekunti nykyisen järjestelmän ajan jälkeen seuraavien sekunnin viikon aikana.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
