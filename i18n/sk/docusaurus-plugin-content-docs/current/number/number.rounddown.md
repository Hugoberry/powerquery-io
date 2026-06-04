---
title: Number.RoundDown
---

# Number.RoundDown


Vráti najvyššie predchádzajúce číslo. Počet číslic je možné zadať.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Vráti výsledok zaokrúhlenia čísla `number` nadol na najvyššie nasledujúce celé číslo. Ak hodnota `number` je null, táto funkcia vráti hodnotu null. Ak sa uvedie `digits`, `number` sa zaokrúhli na zadaný počet desatinných miest.


## Examples

### Example #1
Zaokrúhlite číslo 1,234 nadol na celé číslo.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Zaokrúhlite číslo 1,999 nadol na celé číslo.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3
Zaokrúhlenie čísla 1,999 na dve desatinné miesta.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
