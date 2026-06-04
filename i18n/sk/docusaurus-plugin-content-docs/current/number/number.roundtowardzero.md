---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Vráti výsledok zaokrúhlenia kladných čísel nadol a záporných čísel nahor. Počet číslic je možné zadať.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Vráti výsledok zaokrúhlenia čísla `number` na základe znamienka čísla. Táto funkcia zaokrúhli kladné čísla nadol a záporné čísla nahor. Ak je zadaná funkcia `digits`, `number` sa zaokrúhli na desatinné čísla (`digits`).


## Examples

### Example #1
Zaokrúhlite číslo –1,2 smerom k nule.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2
Zaokrúhlite číslo 1,2 smerom k nule.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3
Zaokrúhlenie čísla -1,234 na dve desatinné miesta smerom k nule.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
