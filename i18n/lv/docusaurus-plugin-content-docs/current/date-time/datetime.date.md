---
title: DateTime.Date
---

# DateTime.Date


Atgriež datuma komponentu noteiktai datuma, datuma un laika vai datuma, laika un laika joslas vērtībai.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Atgriež `dateTime` parametra datuma komponentu, ja parametrs ir `date`, `datetime` vai `datetimezone` vērtība, vai `Null`, ja parametrs ir `null`.


## Examples

### Example #1
Atrast datuma vērtību vērtībai #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
