---
title: Number.RoundUp
---

# Number.RoundUp


Vráti najvyššie nasledujúce číslo. Počet číslic je možné zadať.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Vráti výsledok zaokrúhlenia `number` nahor na najbližšie najvyššie celé číslo. Ak je hodnota `number` null, táto funkcia vráti hodnotu null. Ak sa uvedie `digits`, `number` sa zaokrúhli na zadaný počet desatinných miest.


## Examples

### Example #1
Zaokrúhlite číslo 1,234 nahor na celé číslo.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2
Zaokrúhlite číslo 1,999 nahor na celé číslo.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3
Zaokrúhlenie čísla 1,234 na dve desatinné miesta.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
