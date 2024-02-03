---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Ilmaisee, onko tämä päivämäärä kuluvana kuukautena, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko annettu datetime-arvo <code>dateTime</code> kuluvana kuukautena, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.      <ul>      <li><code>dateTime</code>: laskettava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyinen järjestelmän aika kuluvana kuukautena.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
