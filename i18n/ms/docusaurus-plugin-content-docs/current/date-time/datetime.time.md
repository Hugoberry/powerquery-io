---
title: DateTime.Time
---

# DateTime.Time


Mengembalikan bahagian masa bagi nilai datetime yang ditentukan.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

Mengembalikan bahagian masa bagi nilai datetime yang ditentukan, `dateTime`.


## Examples

### Example #1
Cari nilai masa bagi #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
