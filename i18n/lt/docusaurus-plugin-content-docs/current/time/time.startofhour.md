---
title: Time.StartOfHour
---

# Time.StartOfHour


Pateikiama valandos pradžia.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Pateikiama dienos, kurioje yra `dateTime`, pradžia. `dateTime` turi būti `time`, `datetime` arba `datetimezone` reikšmė.


## Examples

### Example #1
Rasti 2011 m. spalio 10 d. 8:10:32 valandos pradžią.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
