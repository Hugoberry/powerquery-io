---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


## Description

Ilmaisee, onko tämä päivämäärä edellisen vuosien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuoden aikana.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> edellisen vuosien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuoden aikana.      <ul>      <li><code>dateTime</code>: arvioitava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      <li><code>years</code>: vuosien määrä.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko vuosi ennen nykyistä järjestelmän aikaa edellisten kahden vuoden aikana.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
