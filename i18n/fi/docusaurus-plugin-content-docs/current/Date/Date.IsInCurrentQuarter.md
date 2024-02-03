---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Ilmaisee, onko tämä päivämäärä kuluvana vuosineljänneksenä, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko annettu datetime-arvo <code>dateTime</code> kuluvana vuosineljänneksenä, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.      <ul>      <li><code>dateTime</code>: laskettava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyinen järjestelmän aika kuluvana vuosineljänneksenä.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
