---
title: Time.StartOfHour
---

# Time.StartOfHour


Returnează începutul orei.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Returnează începutul orei reprezentat de `dateTime`. `dateTime` trebuie să fie o valoare `time`, `datetime` sau `datetimezone`.


## Examples

### Example #1
Găsiți începutul orei pentru 10 octombrie 2011, 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
