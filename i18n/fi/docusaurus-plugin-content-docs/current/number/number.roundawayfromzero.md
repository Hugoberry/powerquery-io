---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


Palauttaa tuloksen positiivisten lukujen pyöristämisestä ylöspäin ja negatiivisten alaspäin. Numeroiden määrä voidaan määrittää.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Palauttaa tuloksen luvun `number` pyöristämisestä luvun etumerkin perusteella. Tämä funktio pyöristää positiiviset luvut ylöspäin ja negatiiviset alaspäin. Jos `digits` määritetään, `number` pyöristetään `digits` desimaaliin.


## Examples

### Example #1
Pyöristä luku -1,2 nollasta poispäin.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2
Pyöristä luku 1,2 nollasta poispäin.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3
Pyöristä luku -1,234 kahteen desimaaliin nollasta poispäin.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
