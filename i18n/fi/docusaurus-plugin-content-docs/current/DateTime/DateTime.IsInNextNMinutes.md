---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Ilmaisee, onko tämä datetime-arvo seuraavan minuuttien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan minuutin aikana.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> seuraavan minuuttien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan minuutin aikana.      <ul>      <li><code>dateTime</code>: arvioitava <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      <li><code>minutes</code>: minuuttien määrä.</li>      </ul>


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
