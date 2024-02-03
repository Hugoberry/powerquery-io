---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Ilmaisee, onko tämä päivämäärä seuraavan vuosien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuoden aikana.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> seuraavan vuosien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuoden aikana.      <ul>      <li><code>dateTime</code>: arvioitava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      <li><code>years</code>: vuosien määrä.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko vuosi nykyisen järjestelmän ajan jälkeen seuraavien kahden vuoden aikana.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
