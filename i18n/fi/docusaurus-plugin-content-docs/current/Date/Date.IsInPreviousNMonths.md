---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Ilmaisee, onko tämä päivämäärä edellisen kuukausien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan kuukauden aikana.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> edellisen kuukausien määrän aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan kuukauden aikana.      <ul>      <li><code>dateTime</code>: arvioitava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      <li><code>months</code>: kuukausien määrä.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko kuukausi ennen nykyistä järjestelmän aikaa edellisten kahden kuukauden aikana.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
