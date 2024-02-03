---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


## Description

Ilmaisee, onko tämä datetime-arvo edellisen minuuttien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan minuutin aikana.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> edellisen minuuttien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan minuutin aikana.      <ul>      <li><code>dateTime</code>: arvioitava <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      <li><code>minutes</code>: minuuttien määrä.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko minuutti ennen nykyistä järjestelmän aikaa edellisten kahden minuutin aikana.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
