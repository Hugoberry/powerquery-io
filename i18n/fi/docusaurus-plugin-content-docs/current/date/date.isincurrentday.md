---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Ilmaisee, onko tämä päivämäärä kuluvana päivänä, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko annettu datetime-arvo `dateTime` kuluvana päivänä, jonka järjestelmän nykyinen päivämäärä ja aika määrittävät.

-   `dateTime`: laskettava `date`\-, `datetime`\- tai `datetimezone`\-arvo.


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
