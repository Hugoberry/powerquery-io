---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Ilmaisee, onko tämä päivämäärä kuluvana päivänä, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko annettu datetime-arvo <code>dateTime</code> kuluvana päivänä, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.      <ul>      <li><code>dateTime</code>: laskettava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyinen järjestelmän aika nykyisenä päivänä.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
