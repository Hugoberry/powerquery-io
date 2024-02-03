---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Pateikiama valandos pradžia.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Pateikiama dienos, kurioje yra <code>dateTime</code>, pradžia.    <code>dateTime</code> turi būti <code>time</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė.


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
