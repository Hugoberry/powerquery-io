---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


## Description

Ilmaisee, onko tämä päivämäärä seuraavan vuosineljänneksen aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuosineljänneksen aikana.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> seuraavan vuosineljänneksen aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuosineljänneksen aikana.      <ul>      <li><code>dateTime</code>: arvioitava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyisen järjestelmän ajan jälkeen oleva vuosineljännes seuraavana vuosineljänneksenä.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
