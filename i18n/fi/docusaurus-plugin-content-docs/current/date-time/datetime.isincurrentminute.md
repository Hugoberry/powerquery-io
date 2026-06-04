---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Ilmaisee, onko tämä datetime-kohde kuluvan minuutin aikana järjestelmän nykyisen päivämäärän ja ajan määrittämänä.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` kuluvan minuutin aikana järjestelmän nykyisen päivämäärän ja ajan määrittämänä.

-   `dateTime`: arvioitava `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, onko nykyinen järjestelmän aika kuluvalla minuutilla.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
