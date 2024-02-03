---
title: DateTime.Date
---

# DateTime.Date


## Description

Atgriež datuma komponentu noteiktai datuma, datuma un laika vai datuma, laika un laika joslas vērtībai.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Atgriež datuma komponentu <code>dateTime</code>, dotajai <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtībai.


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
