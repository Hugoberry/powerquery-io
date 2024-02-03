---
title: DateTime.Time
---

# DateTime.Time


## Description

Vrátí časovou část předané hodnoty datetime.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Vrátí časovou část předané hodnoty datetime, <code>dateTime</code>.


## Examples

### Example #1 
Najít hodnotu času v hodnotě #datetime(2010, 12, 31, 11, 56, 02)
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
