---
title: Date.StartOfWeek
---

# Date.StartOfWeek


Pateikiama savaitės pradžia.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Pateikiama savaitės, kurioje yra `dateTime`, pradžia. `dateTime` turi būti `date`, `datetime` arba `datetimezone` reikšmė.


## Examples

### Example #1
Raskite 2011 m. spalio 11 d., antradienio, savaitės pradžią.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2
Raskite 2011 m. spalio 11 d., antradienio, savaitės pradžią, naudodami pirmadienį kaip savaitės pradžią.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
