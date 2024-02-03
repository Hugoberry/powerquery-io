---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Vráti najvyššie predchádzajúce číslo. Počet číslic je možné zadať.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Vráti výsledok zaokrúhlenia čísla <code>number</code> nadol na najvyššie nasledujúce celé číslo. Ak hodnota <code>number</code> je null, táto funkcia vráti hodnotu null.    Ak sa uvedie <code>digits</code>, <code>number</code> sa zaokrúhli na zadaný počet desatinných miest.  


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
