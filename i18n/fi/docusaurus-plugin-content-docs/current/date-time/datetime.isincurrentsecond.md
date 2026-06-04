---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Ilmaisee, onko tämä datetime-kohde kuluvan sekunnin aikana järjestelmän nykyisen päivämäärän ja ajan määrittämänä.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko määritetty datetime-arvo `dateTime` kuluvan sekunnin aikana järjestelmän nykyisen päivämäärän ja ajan määrittämänä.

-   `dateTime`: arvioitava `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, onko nykyinen järjestelmän aika kuluvalla sekunnilla.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
