---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Ilmaisee, onko tämä päivämäärä kuluvana vuotena ja kuluvana päivänä tai sitä ennen järjestelmän nykyisen päivämäärän ja ajan määrittämänä.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko annettu datetime-arvo `dateTime` kuluvana vuotena ja kuluvana päivänä tai sitä ennen järjestelmän nykyisen päivämäärän ja ajan määrittämänä.

-   `dateTime`: laskettava `date`\-, `datetime`\- tai `datetimezone`\-arvo.


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
