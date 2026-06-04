---
title: DateTime.Time
---

# DateTime.Time


Retorna la part de l'hora del valor datetime donat.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

Retorna la part de l'hora del valor datetime donat, `dateTime`.


## Examples

### Example #1
Troba el valor time de #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
