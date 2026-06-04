---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Ilmaisee, onko tämä päivämäärä kuluvana vuosineljänneksenä, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko annettu datetime-arvo `dateTime` kuluvana vuosineljänneksenä, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.

-   `dateTime`: laskettava `date`\-, `datetime`\- tai `datetimezone`\-arvo.


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
