---
title: DateTime.Time
---

# DateTime.Time


## Description

Palauttaa annetun datetime-arvon aikaosan.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Palauttaa annetun datetime-arvon <code>dateTime</code> aikaosan.


## Examples

### Example #1 
Selvitä kohteen #datetime(2010, 12, 31, 11, 56, 02) aika-arvo.
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
