---
title: Number.RoundDown
---

# Number.RoundDown


Vrátí předchozí nejvyšší číslo. Dá se zadat počet číslic.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Vrátí výsledek zaokrouhlení hodnoty `number` dolů na nejbližší předchozí celé číslo. Pokud má `number` hodnotu null, vrátí tato funkce hodnotu null. Pokud se zadá `digits`, `number` se zaokrouhlí na zadaný počet desetinných číslic.


## Examples

### Example #1
Zaokrouhlí číslo 1,234 dolů na celé číslo.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Zaokrouhlí číslo 1,999 dolů na celé číslo.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3
Zaokrouhlete číslo 1,999 dolů na dvě desetinná místa.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
