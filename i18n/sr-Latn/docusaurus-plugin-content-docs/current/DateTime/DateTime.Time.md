---
title: DateTime.Time
---

# DateTime.Time


## Description

Vraća vremenski segment date vrednosti datuma i vremena.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Vraća vremenski segment date vrednosti datuma i vremena, <code>dateTime</code>.


## Examples

### Example #1 
Pronalaženje vrednosti vremena za #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
