---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


## Description

Ilmaisee, onko tämä datetime-arvo seuraavan tunnin aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan tunnin aikana.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> seuraavan tunnin aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan tunnin aikana.      <ul>      <li><code>dateTime</code>: arvioitava <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko tunti nykyisen järjestelmän ajan jälkeen seuraavan tunnin aikana.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
