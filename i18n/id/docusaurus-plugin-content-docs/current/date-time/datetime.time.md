---
title: DateTime.Time
---

# DateTime.Time


Menghasilkan bagian waktu dari nilai datetime tertentu.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

Menghasilkan bagian waktu dari nilai datetime tertentu, `dateTime`.


## Examples

### Example #1
Mencari nilai waktu dari #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
