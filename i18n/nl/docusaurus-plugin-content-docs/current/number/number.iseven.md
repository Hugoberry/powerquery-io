---
title: Number.IsEven
---

# Number.IsEven


Geeft aan of de waarde een even getal is.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Geeft aan of de waarde `number` een even getal is door `true` te retourneren bij een even getal en `false` als de waarde geen even getal is.


## Examples

### Example #1
Controleren of 625 een even getal is.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
Controleren of 82 een even getal is.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
