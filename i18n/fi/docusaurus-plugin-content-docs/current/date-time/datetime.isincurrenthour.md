---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Ilmaisee, onko tämä datetime-arvo kuluvan tunnin aikana järjestelmän nykyisen päivämäärän ja ajan määrittämänä.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` kuluvan tunnin aikana järjestelmän nykyisen päivämäärän ja ajan määrittämänä.

-   `dateTime`: arvioitava `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, onko nykyinen järjestelmän aika kuluvalla tunnilla.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
