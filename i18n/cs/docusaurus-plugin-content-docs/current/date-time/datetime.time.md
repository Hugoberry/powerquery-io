---
title: DateTime.Time
---

# DateTime.Time


Vrátí časovou část předané hodnoty datetime.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

Vrátí časovou část předané hodnoty datetime, `dateTime`.


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
