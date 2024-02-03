---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Ilmaisee, onko tämä päivämäärä kuluvana vuotena ja kuluvana päivänä tai sitä ennen järjestelmän nykyisen päivämäärän ja ajan määrittämänä.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko annettu datetime-arvo <code>dateTime</code> kuluvana vuotena ja kuluvana päivänä tai sitä ennen järjestelmän nykyisen päivämäärän ja ajan määrittämänä.      <ul>      <li><code>dateTime</code>: laskettava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyinen järjestelmän aika kuluvana vuotena tähän mennessä.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
