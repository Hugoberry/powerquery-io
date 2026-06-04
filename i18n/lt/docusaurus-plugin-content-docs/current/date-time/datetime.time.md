---
title: DateTime.Time
---

# DateTime.Time


Pateikiama nurodytos datos ir laiko reikšmės laiko dalis.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

Pateikiama nurodytos datos ir laiko reikšmės laiko dalis, `dateTime`.


## Examples

### Example #1
Rasti #datetime(2010, 12, 31, 11, 56, 02) laiko reikšmę.
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
