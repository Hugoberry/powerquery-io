---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Ilmaisee, onko tämä päivämäärä kuluvana vuotena, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko annettu datetime-arvo `dateTime` kuluvana vuotena, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.

-   `dateTime`: laskettava `date`\-, `datetime`\- tai `datetimezone`\-arvo.


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
