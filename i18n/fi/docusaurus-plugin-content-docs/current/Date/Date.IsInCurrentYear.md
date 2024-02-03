---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Ilmaisee, onko tämä päivämäärä kuluvana vuotena, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko annettu datetime-arvo <code>dateTime</code> kuluvana vuotena, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.      <ul>      <li><code>dateTime</code>: laskettava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyinen järjestelmän aika kuluvana vuotena.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
