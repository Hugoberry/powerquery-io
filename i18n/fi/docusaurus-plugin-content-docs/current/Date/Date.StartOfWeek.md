---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Palauttaa viikon alun.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Palauttaa viikon alun, joka sisältää <code>dateTime</code>. <code>dateTime</code> on oltava <code>date</code>, <code>datetime</code> tai <code>datetimezone</code> arvo.


## Examples

### Example #1 
Selvitä viikon alku tiistaille 11. lokakuuta 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Selvitä viikon alku tiistaille 11.10.2011 käyttämällä viikon alkuna maanantaita.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
