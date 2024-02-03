---
title: Date.IsInNextDay
---

# Date.IsInNextDay


## Description

Ilmaisee, onko tämä päivämäärä seuraavan päivän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan päivän aikana.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> seuraavan päivän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan päivän aikana.      <ul>      <li><code>dateTime</code>: arvioitava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyisen järjestelmän ajan jälkeen oleva päivä seuraavana päivänä.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
