---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


## Description

Ilmaisee, onko tämä päivämäärä edellisen viikon aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan viikon aikana.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> edellisenä viikkona järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvana viikkona.      <ul>      <li><code>dateTime</code>: arvioitava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyistä järjestelmän aikaa ennen oleva viikko edellisellä viikolla.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
