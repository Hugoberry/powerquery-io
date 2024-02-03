---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Ilmaisee, onko tämä päivämäärä kuluvalla viikolla, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko annettu datetime-arvo <code>dateTime</code> kuluvalla viikolla, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.      <ul>      <li><code>dateTime</code>: laskettava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyinen järjestelmän aika kuluvalla viikolla.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
