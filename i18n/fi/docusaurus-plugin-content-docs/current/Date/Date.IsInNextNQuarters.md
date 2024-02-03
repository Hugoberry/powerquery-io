---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Ilmaisee, onko tämä päivämäärä seuraavan vuosineljännesten määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuosineljänneksen aikana.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> seuraavan vuosineljänneksien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuosineljänneksen aikana.      <ul>      <li><code>dateTime</code>: arvioitava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      <li><code>quarters</code>: vuosineljänneksien määrä.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko vuosineljännes nykyisen järjestelmän ajan jälkeen seuraavien kahden vuosineljänneksen aikana.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
