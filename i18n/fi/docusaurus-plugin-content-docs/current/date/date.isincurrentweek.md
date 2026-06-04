---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Ilmaisee, onko tämä päivämäärä kuluvalla viikolla, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko annettu datetime-arvo `dateTime` kuluvalla viikolla, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.

-   `dateTime`: laskettava `date`\-, `datetime`\- tai `datetimezone`\-arvo.


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
