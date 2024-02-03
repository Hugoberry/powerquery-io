---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Palauttaa tuloksen positiivisten lukujen pyöristämisestä alaspäin ja negatiivisten ylöspäin. Numeroiden määrä voidaan määrittää.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Palauttaa tuloksen luvun <code>number</code> pyöristämisestä luvun etumerkin perusteella. Tämä funktio pyöristää positiiviset luvut alaspäin ja negatiiviset ylöspäin.    Jos <code>digits</code> määritetään, <code>number</code> pyöristetään <code>digits</code> desimaaliin.  


## Examples

### Example #1 
Pyöristä luku -1,2 nollaa kohti.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Pyöristä luku 1,2 nollaa kohti.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Pyöristä luku -1,234 kahteen desimaaliin nollaa kohti.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
