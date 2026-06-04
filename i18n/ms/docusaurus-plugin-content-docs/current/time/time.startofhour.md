---
title: Time.StartOfHour
---

# Time.StartOfHour


Mengembalikan permulaan jam.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Mengembalikan permulaan jam yang diwakili oleh `dateTime`. `dateTime` mesti nilai `time`, `datetime` atau `datetimezone`.


## Examples

### Example #1
Cari permulaan jam bagi 10 Oktober 2011, 8:10:32PG.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
