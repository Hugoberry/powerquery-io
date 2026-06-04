---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Ilmaisee, onko tämä päivämäärä kuluvana kuukautena, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko annettu datetime-arvo `dateTime` kuluvana kuukautena, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.

-   `dateTime`: laskettava `date`\-, `datetime`\- tai `datetimezone`\-arvo.


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
