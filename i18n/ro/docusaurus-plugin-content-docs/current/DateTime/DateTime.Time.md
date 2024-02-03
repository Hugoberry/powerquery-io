---
title: DateTime.Time
---

# DateTime.Time


## Description

Returnează componenta time a valorii datetime date.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Returnează componenta time a valorii datetime date, <code>dateTime</code>.


## Examples

### Example #1 
Găsiţi valoarea pentru oră pentru #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
