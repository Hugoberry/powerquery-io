---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

Ilmaisee, onko tämä päivämäärä edellisen vuosineljänneksen aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuosineljänneksen aikana.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> edellisen vuosineljänneksen aikana järjestelmän nykyisen päivämäärän ja ajan perusteella. Huomaa, että tämä funktio palauttaa arvon false, kun sille välitetään arvo, joka on kuluvan vuosineljänneksen aikana.      <ul>      <li><code>dateTime</code>: arvioitava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyistä järjestelmän aikaa ennen oleva vuosineljännes edellisenä vuosineljänneksenä.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
